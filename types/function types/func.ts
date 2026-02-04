// Function parameters and return anotated with types
// Its used to specify the expected types of inputs and outputs for functions

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
// console.log(add("2", 3)); Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// Throws an error if it passed less or more arguments than expected
// console.log(add(10, 15, 20)); Error: Expected 2 arguments, but got 3.


// Any func
function logMessage(anything) {
  console.log(anything);
}
logMessage("Hello, World!"); // Output: Hello, World!
logMessage(123); // Output: 123


// Default parameters
const greet = (name: string = "Guest"): string => {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!


// Void return type
const printMessage = (message: string): void => {
  console.log(message);
}
printMessage("This is a message."); // Output: This is a message.


// Never return type
// Function that always throws an error
const throwError = (message: string): never => {
  throw new Error(message);
};
// throwError("An error occurred.");  Throws an error: An error occurred. 

// Function that never returns (infinite loop)
const infiniteLoop = (): never => {
  while (true) {
    // Loop forever
  }
};

// Variable that can never hold a value
let unreachable: never;
const neverReturn = (): never => {
  while (true) {
    // Loop forever
  }
}
unreachable = neverReturn();