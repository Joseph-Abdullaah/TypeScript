// Union Types in TypeScript
// Union types allow a variable to hold more than one type of value.
// Example of a union type
var value;
value = "Hello";
console.log(typeof value); // Output: string
console.log(value);
value = 42;
console.log(typeof value); // Output: number
console.log(value);
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'. 
// Function with union type parameter
function display(value) {
    if (typeof value === "string") {
        console.log("String value: ".concat(value));
    }
    else if (typeof value === "number") {
        console.log("Number value: ".concat(value));
    }
}
display("Hello"); // Output: String value: Hello
display(42); // Output: Number value: 42
// display(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// Union type with arrays
var arrayValue = ["Hello", 42, true];
console.log(arrayValue);
console.log(typeof arrayValue[0]); // Output: string
console.log(typeof arrayValue[1]); // Output: number
console.log(typeof arrayValue[2]); // Output: boolean
var person = {
    name: "Alice",
    age: 30,
};
console.log(person);
person.age = "thirty"; // Valid assignment
console.log(person);
var address = {
    street: "123 Main St",
    location: "New York",
};
console.log(address);
address.location = 100; // Valid assignment
console.log(address);
// Object that can be either Person or Address or Both at the same time
// Example of an object that can be Person 
var personInfo = {
    name: "Bob",
    age: 25,
};
console.log(personInfo);
// Example of an object that can be Address
var addressInfo = {
    street: "456 Elm St",
    location: "Los Angeles",
};
console.log(addressInfo);
// Example of an object that can be both Person and Address
var fullInfo = {
    name: "Charlie",
    age: 35,
    street: "789 Oak St",
    location: "Chicago",
};
console.log(fullInfo);
