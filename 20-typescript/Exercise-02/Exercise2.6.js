// 1. 2D matrix of numbers
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// 2. Get a value from the matrix
function getCell(matrix, row, col) {
    return matrix[row][col];
}
// 3. Sum all values in the matrix
function sumMatrix(matrix) {
    var sum = 0;
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var value = row_1[_a];
            sum += value;
        }
    }
    return sum;
}
// 4. Jagged array (rows of different lengths)
var jagged = [
    [1, 2],
    [3, 4, 5],
    [6]
];
// 5. 3D array (like a Rubik's cube)
var cube = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
