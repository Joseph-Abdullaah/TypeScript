// Public: can be accessed from anywhere
// Private: can only be accessed within the class
// Protected: can be accessed within the class and its subclasses
class Human {
    public name: string;
    private age: number;
    protected email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getAge(): number {
        return this.age;
    }

    getEmail(): string {
        return this.email;
    }
}


const person1 = new Human("John", 30, "7xTtW@example.com");
console.log(person1.name); // Output: John
console.log(person1.getAge()); // Output: 30
console.log(person1.getEmail()); // Output: 7xTtW@example.com


class Person extends Human {
    constructor(name: string, age: number, email: string) {
        super(name, age, email);
    }
}


// protected members can be accessed in the subclass
const John = new Person("Alice", 24, "8jsydgW@example.com");
console.log(John.name); // Output: Alice
console.log(John.getAge()); // Output: 24
console.log(John.getEmail()); // Output: 8jsydgW@example.com