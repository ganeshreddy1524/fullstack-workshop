const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evens: number[] = numbers.filter(n => n % 2 === 0);

// Double each number
const doubled: number[] = numbers.map(n => n * 2);

// Sum all numbers
const sum: number = numbers.reduce((acc, n) => acc + n, 0);

// Find first number greater than 5
const firstBig: number | undefined = numbers.find(n => n > 5);

// Check if all numbers are positive
const allPositive: boolean = numbers.every(n => n > 0);

// Convert to strings
const stringNumbers: string[] = numbers.map(n => n.toString());