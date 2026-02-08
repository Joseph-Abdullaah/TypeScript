// tuple: Defines a tuple type with specific element types and length.

 
let person: [string, number, boolean] = ["Alice", 30, true];
console.log(person); // Output: ["Alice", 30, true]

// Destructuring a tuple
let [ Name, age, isEmployed ] = person;
console.log(Name, age, isEmployed); // Output: Alice 30 true