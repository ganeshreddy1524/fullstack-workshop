// 1. 2D matrix of numbers
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 2. Get a value from the matrix
function getCell(matrix: number[][], row: number, col: number): number {
    return matrix[row][col];
}

// 3. Sum all values in the matrix
function sumMatrix(matrix: number[][]): number {
    let sum = 0;

    for (const row of matrix) {
        for (const value of row) {
            sum += value;
        }
    }

    return sum;
}

// 4. Jagged array (rows of different lengths)
let jagged: number[][] = [
    [1, 2],
    [3, 4, 5],
    [6]
];

// 5. 3D array (like a Rubik's cube)
let cube: number[][][] = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
