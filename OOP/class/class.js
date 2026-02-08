// Class in TypeScript
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person("John", 30);
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
