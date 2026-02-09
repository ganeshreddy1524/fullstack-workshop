// 1. Coordinate: x and y as numbers
var point = [10, 20];
// 2. RGB Color: three numbers (0–255)
var red = [255, 0, 0];
// 3. User record: id, name, active
var user = [1, "Alice", true];
// 4. Named tuple for HTTP response
var response = [
    200,
    "OK",
    { items: [] }
];
// 5. Function returning a tuple
function parseNumber(input) {
    var value = Number(input);
    if (isNaN(value)) {
        return [false, "Invalid number"];
    }
    return [true, value];
}
console.log("Point:", point);
console.log("Red:", red);
console.log("User:", user);
console.log("Response:", response);
console.log(parseNumber("42"));
console.log(parseNumber("abc"));
