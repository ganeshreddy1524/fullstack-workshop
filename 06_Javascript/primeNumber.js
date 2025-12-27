function prime(limit){
    let arr=[];
    
    for(let i=2;i<=limit;i++){
        let isprime=true
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                isprime=false;
                break
            }
            
        }
        if(isprime==true){
            arr.push(i);
        }
    }
    console.log(arr);
    
}
console.log(prime(29));
