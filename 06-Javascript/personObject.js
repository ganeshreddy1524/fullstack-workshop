let person = {
    name: 'gani',
    age: '23',
    city: 'hyd'
};

console.log(`Initial person:`, person);

person.email = 'ganesh@gmail.com';
console.log(`After adding email:`, person);

delete person.city;
console.log(`After deleting city:`, person);

person.age = 21;
console.log(`After updating age:`, person);

// keys only
Object.keys(person).map(key => {
    console.log(`Key: ${key}`);
});

// key-value pairs
Object.entries(person).map(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// values only
console.log(`Values: ${Object.values(person)}`);

// property check
console.log(`Has email? ${'email' in person}`);
