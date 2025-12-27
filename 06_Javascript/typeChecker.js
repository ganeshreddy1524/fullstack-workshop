const typeOf = (value)=>{
    if(value === null) return null;

    if(typeof value==='number' && Number.isNaN(value)) return 'nan'

    const type = typeof value;
    if(type!=='object') return type

    const typeTag=Object.prototype.toString.call(value)
    return typeTag.slice(8,-1).toLowerCase()
}
console.log(typeOf(null));
console.log(typeOf(undefined));
console.log(typeOf(42)); 
console.log(typeOf(NaN));
console.log(typeOf('hello'));
console.log(typeOf(true));  
console.log(typeOf(Symbol())); 
console.log(typeOf([]));  
console.log(typeOf({})); 
console.log(typeOf(() => {}));
console.log(typeOf(new Date()));
console.log(typeOf(new Map()));
console.log(typeOf(new Set())); 
console.log(typeOf(/regex/)); 
console.log(typeOf(new Error()));
console.log(typeOf(Promise.resolve()));