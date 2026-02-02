// Type Inference : TypeScript can automatically infer types based on the assigned values.
var tech = "TypeScript";
console.log(typeof tech);
console.log(tech);
tech = "JavaScript"; // Valid assignment
// tech = 100; // Error: Type 'number' is not assignable to type 'string'.
var year = 2024;
console.log(typeof year);
console.log(year);
year = 2025; // Valid assignment
// year = "2025"; Error: Type 'string' is not assignable to type 'number'.
var isActive = false;
console.log(typeof isActive);
console.log(isActive);
isActive = true; // Valid assignment
// isActive = "true"; Error: Type 'string' is not assignable to type 'boolean'.
var data = null;
console.log(typeof data);
console.log(data);
data = null; // Valid assignment
// data = "null"; Error: Type 'string' is not assignable to type 'null'.    
var result = undefined;
console.log(typeof result);
console.log(result);
result = undefined; // Valid assignment
// result = "undefined"; Error: Type 'string' is not assignable to type 'undefined'.
