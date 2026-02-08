// Literal Types: Defining exact values for variables
// Literal types allow you to define a specific value for a variable.

let color: "red" | "green" | "blue";
color = "blue";
console.log(typeof color, color);

let number: 1 | 2 | 3;
number = 2;
// number = 7;  Error: Type '7' is not assignable to type '1 | 2 | 3'
console.log(typeof number, number);

let boolean: true;
boolean = true;
// boolean = false;  //Error: Type 'false' is not assignable to type 'true | false'
console.log(typeof boolean, boolean);

let password: "admin123" = "admin123";
// password = "123admin";  Error: Type '"123admin"' is not assignable to type '"admin123"'
console.log(typeof password, password);
