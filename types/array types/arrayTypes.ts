// []notion array types
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Array<String> Type
let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// numbers.push("hello");
// names.push(42);


// Multi-dimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);

const triplyMatrix: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]                       
  ] ];
console.log(triplyMatrix);