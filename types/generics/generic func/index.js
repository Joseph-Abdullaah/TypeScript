// Generic Funntion: is a function that can work with any data type.
// It allows us to create a function that can be used with different types of data without having to write multiple functions for each type.
// Here is an example without generic function in TypeScript:
function printNumber(n1, n2) {
    return [n1, n2];
}
function printStr(n1, n2) {
    return [n1, n2];
}
function printBoolean(n1, n2) {
    return [n1, n2];
}
function printSomething(p1, p2) {
    return [p1, p2];
}
console.log(printNumber(1, 2)); // Output: [1, 2]
console.log(printStr("Hello", "World")); // Output: ["Hello", "World"]
console.log(printBoolean(true, false)); // Output: [true, false]
console.log(printSomething(1, "Hello")); // Output: [1, "Hello"]
// --------------------------------------
// Here is an example with generic function in TypeScript:
// The <Type> or <T> is a placeholder for the type that will be passed when the function is called.
function uniqueDataType(p1, p2) {
    return [p1, p2];
}
// same function but used different datatypes by passing type as an argument when calling the function.
console.log(uniqueDataType(2, 10));
console.log(uniqueDataType("Hello", "World"));
console.log(uniqueDataType(true, false));
console.log(uniqueDataType({ name: "Buddy", color: "Brown" }, { name: "Max", color: "Black" }));
