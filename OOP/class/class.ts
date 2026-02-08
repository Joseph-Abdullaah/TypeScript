// Class in TypeScript

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("John", 30);
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30