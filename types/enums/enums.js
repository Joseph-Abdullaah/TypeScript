// Enums: Defining a set of named constants
// Enums allow you to define a set of named constants that represent a group of related values. 
// They can be numeric or string-based.
var weatherConditions;
(function (weatherConditions) {
    weatherConditions["sunny"] = "its sunny";
    weatherConditions["rainy"] = "its rainy";
    weatherConditions["cloudy"] = "its cloudy";
    weatherConditions["snowy"] = "its snowy"; // 3
})(weatherConditions || (weatherConditions = {}));
console.log(typeof weatherConditions);
console.table(weatherConditions);
console.log(weatherConditions.snowy); // Output: its snowy
var currentWeather = weatherConditions.sunny;
console.log("The current weather is: ".concat(currentWeather));
