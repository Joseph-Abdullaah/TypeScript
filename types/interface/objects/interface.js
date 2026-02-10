// Interface in TypeScript
// An interface is a contract that defines the structure of an object.
// It specifies the properties and methods that an object must have.
// interface is not just limited to objects, but it can also use to defined the structure of functions and classes.
var computer = {
    name: "Dell",
    price: 50000,
    ram: 8,
    processor: "Intel Core i7",
    hardDisk: "SSD"
};
console.table(computer);
console.log(computer.name);
console.log(computer.price);
console.log(computer.ram);
console.log(computer.processor);
console.log(computer.hardDisk);
var movie = {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    director: "Frank Darabont"
};
console.log(movie);
console.log(movie.title);
console.log(movie.genre);
console.log(movie.rating);
console.log(movie.year); // undefined
console.log(movie.director);
// movie.title = "Jurassic Park"; Error: Cannot assign to 'title' because it is a read-only property.
