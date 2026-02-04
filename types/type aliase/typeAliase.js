// Type Aliases: Defining custom types for better code readability and maintainability
var printUserInfo = function (user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Location: ").concat(user.location);
};
var userInfo = printUserInfo({ name: "Alice", age: 30, location: "New York" });
console.log(userInfo);
var anotherUserInfo = printUserInfo({ name: "Bob", age: 25, location: "Los Angeles" });
console.log(anotherUserInfo);
