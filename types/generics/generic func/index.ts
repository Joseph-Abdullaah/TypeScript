// Generic Funntion: is a function that can work with any data type.
// It allows us to create a function that can be used with different types of data without having to write multiple functions for each type.

// Here is an example without generic function in TypeScript:
function printNumber(n1: number, n2: number): [number, number] {
  return [n1, n2];
}

function printStr(n1: string, n2: string): [string, string] {
  return [n1, n2];
}

function printBoolean(n1: boolean, n2: boolean): [boolean, boolean] {
  return [n1, n2];
}

function printSomething(p1: any, p2: any): [any, any] {
  return [p1, p2];
}

console.log(printNumber(1, 2)); // Output: [1, 2]
console.log(printStr("Hello", "World")); // Output: ["Hello", "World"]
console.log(printBoolean(true, false)); // Output: [true, false]
console.log(printSomething(1, "Hello")); // Output: [1, "Hello"]

// --------------------------------------

// Here is an example with generic function in TypeScript:
// The <Type> or <T> is a placeholder for the type that will be passed when the function is called.
function uniqueDataType<Type>(p1: Type, p2: Type): [Type, Type] {
  return [p1, p2];
}

// same function but used different datatypes by passing type as an argument when calling the function.
console.log(uniqueDataType<number>(2, 10));
console.log(uniqueDataType<string>("Hello", "World"));
console.log(uniqueDataType<boolean>(true, false));


// Using interface with generic function
interface Dog {
  name: string;
  color: string;
}

console.log(
  uniqueDataType<Dog>(
    { name: "Buddy", color: "Brown" },
    { name: "Max", color: "Black" },
  ),
);
