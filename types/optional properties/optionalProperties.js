// Optional Properties in TypeScript
// You can make a certain property optional in an Object by adding 
// a question mark (?) after the property name in the type definition.
var user1 = { name: "Alice", location: "Wonderland" }; // Valid
var user2 = { name: "Bob", age: 30, location: "Builderland" }; // Also valid
// user1.location = "New location"  Error: Cannot assign to 'location' because it is a read-only property. 
user1.name = "John"; // Valid
console.table(user1);
console.table(user2);
console.log("name: ".concat(user1.name, ", location: ").concat(user1.location));
console.log("name: ".concat(user2.name, ", age: ").concat(user2.age, ", location: ").concat(user2.location));
// In the above example, the 'age' property is optional. 
// This means that an object of type 'User' may or may not have the 'age' property.
