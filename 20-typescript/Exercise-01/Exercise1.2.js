function calculateArea(width, height) {
    return width * height;
}
function greetUser(name, age) {
    return "Hello ".concat(name, ", you are ").concat(age, " years old.");
}
function isEligible(age) {
    return age >= 18;
}
console.log(isEligible(23));
