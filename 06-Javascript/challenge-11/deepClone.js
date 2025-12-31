let original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'gaming']
};

// Arrow function + proper deep clone
const deepClone = (obj) => ({
    ...obj,
    address: { ...obj.address },
    hobbies: obj.hobbies.map(hobby => hobby)
});

let cloned = deepClone(original);

cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(`Original city: ${original.address.city}`);
console.log(`Original hobbies: ${original.hobbies.join(', ')}`);
