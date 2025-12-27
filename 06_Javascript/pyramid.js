function pyramid(x){
    let n=x;
    for(let i=1;i<=n;i++){
        let row=""
            for(let j=1;j<=n-i;j++){
                row+=" "
            }
            for(let k=1;k<=i;k++){
                row+=k
            }
            for(let l=i-1;l>=1;l--){
                row+=l
            }
            console.log(row);
            
    }
    
}
console.log(pyramid(5));
