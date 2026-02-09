var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter even numbers
var evens = numbers.filter(function (n) { return n % 2 === 0; });
// Double each number
var doubled = numbers.map(function (n) { return n * 2; });
// Sum all numbers
var sum = numbers.reduce(function (acc, n) { return acc + n; }, 0);
// Find first number greater than 5
var firstBig = numbers.find(function (n) { return n > 5; });
// Check if all numbers are positive
var allPositive = numbers.every(function (n) { return n > 0; });
// Convert to strings
var stringNumbers = numbers.map(function (n) { return n.toString(); });
