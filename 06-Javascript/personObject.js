let person={
    name:'gani',age:'23',city:'hyd'
}
console.log(person);
person.email='ganesh@gmail.com';
console.log(person);
delete person.city
console.log(person);
person.age=21
console.log(person);
for (const key in person) {
    console.log(key);
}
for (const key in person) {
    console.log(key,person[key]);   
}
for (let element of Object.entries(person)) {
    console.log(element);
    
}
console.log(Object.values(person))
console.log("email" in person);
