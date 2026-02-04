// Intersection Types in TypeScript
// It combines multiple types into one. An object of an intersection type will have all the properties and methods of the combined types.


type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

// combined intersection type
type Employee = Person & Address;

const employee: Employee = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "New York"
};

console.table(employee);