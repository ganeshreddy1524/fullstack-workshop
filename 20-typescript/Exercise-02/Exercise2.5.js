// Approach 1: Using an enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
// Approach 3: Using const object (runtime + type safety)
var Colors = {
    Red: "Red",
    Green: "Green",
    Blue: "Blue",
    Yellow: "Yellow"
};
// Functions using each approach
function paintWithEnum(color) {
    console.log("Painting with enum:", Color[color]);
}
function paintWithUnion(color) {
    console.log("Painting with union:", color);
}
function paintWithConst(color) {
    console.log("Painting with const:", color);
}
