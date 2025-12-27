function createObservable(initialValue) {
        let value=initialValue;
        let subscribers=[];
    return {
            
            subscribe(fn){
                subscribers.push(fn)
            },
            set(newValue){
                const oldValue=value;
                value=newValue

                subscribers.forEach(fn=>{
                    fn(newValue,oldValue)
                })
            },
            get(){
                return value
            },
            computed(callback){
                const computedObs = createObservable(callback(value));
                this.subscribe((newValue)=>{
                    computedObs.set(callback(newValue));
                })
                return computedObs
            }
            
    }

}
const count=createObservable(0)
count.subscribe((newValue,oldValue)=>{
    console.log(`count changed from ${oldValue} to ${newValue}`)
})

count.set(4)
count.set(10)
console.log(count.get());
const doubled = count.computed(val => val * 2);
doubled.subscribe(val => console.log('Doubled:', val));
count.set(20)


