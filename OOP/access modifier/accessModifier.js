var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Public: can be accessed from anywhere
// Private: can only be accessed within the class
// Protected: can be accessed within the class and its subclasses
var Human = /** @class */ (function () {
    function Human(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Human.prototype.getAge = function () {
        return this.age;
    };
    Human.prototype.getEmail = function () {
        return this.email;
    };
    return Human;
}());
var person1 = new Human("John", 30, "7xTtW@example.com");
console.log(person1.name); // Output: John
console.log(person1.getAge()); // Output: 30
console.log(person1.getEmail()); // Output: 7xTtW@example.com
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age, email) {
        return _super.call(this, name, age, email) || this;
    }
    return Person;
}(Human));
// protected members can be accessed in the subclass
var John = new Person("Alice", 24, "8jsydgW@example.com");
console.log(John.name); // Output: Alice
console.log(John.getAge()); // Output: 24
console.log(John.getEmail()); // Output: 8jsydgW@example.com
