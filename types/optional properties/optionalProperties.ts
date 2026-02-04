// Optional Properties in TypeScript
// You can make a certain property optional in an Object by adding 
// a question mark (?) after the property name in the type definition.


// Readonly Properties in TypeScript
// You can make a property read-only by using the 'readonly' modifier 
// before the property name in the type definition.

type User = {
    name: string;
    age?: number; // age is an optional property
    readonly location: string; // location is a read-only property
}

const user1: User = { name: "Alice", location: "Wonderland" }; // Valid
const user2: User = { name: "Bob", age: 30, location: "Builderland" }; // Also valid


// user1.location = "New location"  Error: Cannot assign to 'location' because it is a read-only property. 
user1.name = "John"; // Valid


console.table(user1);
console.table(user2);

console.log(`name: ${user1.name}, location: ${user1.location}`);
console.log(`name: ${user2.name}, age: ${user2.age}, location: ${user2.location}`);

// In the above example, the 'age' property is optional. 
// This means that an object of type 'User' may or may not have the 'age' property.