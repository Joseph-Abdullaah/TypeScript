// Enums: Defining a set of named constants
// Enums allow you to define a set of named constants that represent a group of related values.
// They can be numeric or string-based.

enum weatherConditions {
  sunny = "its sunny", // index 0
  rainy = "its rainy", // 1
  cloudy = "its cloudy", // 2
  snowy = "its snowy", // 3
}

console.log(typeof weatherConditions);
console.table(weatherConditions);
console.log(weatherConditions.snowy); // Output: its snowy

const currentWeather: string = weatherConditions.sunny;
console.log(`The current weather is: ${currentWeather}`);
