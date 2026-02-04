// String 
// let myvar: type = value;
let myName: string = "John Doe";
console.log(myName);
console.log(typeof myName);

myName = "Jane Smith"; // Valid assignment
// myName = 42; // Error: Type 'number' is not assignable to type 'string'.


// Number
let myAge: number = 30;
console.log(myAge);
console.log(typeof myAge);

myAge = 35; // Valid assignment
// myAge = "thirty"; // Error: Type 'string' is not assignable to type 'number'.


// Boolean
let isStudent: boolean = true;
console.log(isStudent);
console.log(typeof isStudent);

isStudent = false; // Valid assignment
// isStudent = "false"; // Error: Type 'string' is not assignable to type 'boolean


// Null
let emptyValue: null = null;
console.log(emptyValue);
console.log(typeof emptyValue);

// emptyValue = "null"; // Error: Type 'string' is not assignable to type 'null'.


// Undefined
let notAssigned: undefined = undefined;
console.log(notAssigned);
console.log(typeof notAssigned);

// notAssigned = "undefined"; // Error: Type 'string' is not assignable to type 'undefined'.