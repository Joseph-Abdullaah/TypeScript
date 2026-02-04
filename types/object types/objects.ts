// Object type with specific properties
const person: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Alice",
  age: 23,
  isStudent: true,
};

console.log(person);
console.log(typeof person.name);

// Function that takes an object with specific properties
function greet(person: { name: string; age: number }): string {
  return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}
console.log(greet({ name: "Bob", age: 30 }));

// Objects as function return value
const printUser = (): { id: number; username: string } => {
  return { id: 1, username: "John Doe" };
};
console.log(printUser().username);
