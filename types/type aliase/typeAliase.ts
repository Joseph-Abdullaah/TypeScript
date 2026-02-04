// Type Aliases: Defining custom types for better code readability and maintainability

type name = string;
type age = number;
type location = string;

// make the first letter of the type uppercase to follow TypeScript conventions
type Person = {
    name: name;
    age: age;
    location: location;
}

const printUserInfo = (user: Person) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}

const userInfo =printUserInfo({ name: "Alice", age: 30, location: "New York" });
console.log(userInfo);

const anotherUserInfo = printUserInfo({ name: "Bob", age: 25, location: "Los Angeles" });
console.log(anotherUserInfo);

