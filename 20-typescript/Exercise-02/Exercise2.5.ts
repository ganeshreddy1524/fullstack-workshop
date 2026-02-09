// Approach 1: Using an enum
enum Color {
    Red,
    Green,
    Blue,
    Yellow
}

// Approach 2: Using a union type (often preferred)
type ColorType = "Red" | "Green" | "Blue" | "Yellow";

// Approach 3: Using const object (runtime + type safety)
const Colors = {
    Red: "Red",
    Green: "Green",
    Blue: "Blue",
    Yellow: "Yellow"
} as const;

// Extract type from const object
type ColorValue = typeof Colors[keyof typeof Colors];

// Functions using each approach
function paintWithEnum(color: Color): void {
    console.log("Painting with enum:", Color[color]);
}

function paintWithUnion(color: ColorType): void {
    console.log("Painting with union:", color);
}

function paintWithConst(color: ColorValue): void {
    console.log("Painting with const:", color);
}
