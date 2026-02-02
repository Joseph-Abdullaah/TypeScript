// Object type with specific properties
var person = {
    name: "Alice",
    age: 23,
    isStudent: true,
};
console.log(person);
console.log(typeof person.name);
// Function that takes an object with specific properties
function greet(person) {
    return "Hello, my name is ".concat(person.name, " and I am ").concat(person.age, " years old.");
}
console.log(greet({ name: "Bob", age: 30 }));
// Objects as function return value
var printUser = function () {
    return { id: 1, username: "John Doe" };
};
console.log(printUser().username);
