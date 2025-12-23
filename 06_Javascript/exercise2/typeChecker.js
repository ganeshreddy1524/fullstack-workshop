function getType(value){
    return typeof(value)
}
console.log(getType(null));
console.log(getType(3));
console.log(getType([1,2,3]));
console.log(getType(()=>{}));
console.log(getType("gani"));
