// Interface in TypeScript
// An interface is a contract that defines the structure of an object.
// It specifies the properties and methods that an object must have.
// interface is not just limited to objects, but it can also use to defined the structure of functions and classes.

interface Computer {
    name: string;
    price: number;
    ram: number;
    processor: string;
    hardDisk: string;
}

const computer: Computer = {
    name: "Dell",
    price: 50000,
    ram: 8,
    processor: "Intel Core i7",
    hardDisk: "SSD"
}

console.table(computer);
console.log(computer.name);
console.log(computer.price);
console.log(computer.ram);
console.log(computer.processor);
console.log(computer.hardDisk);


interface Movie {
    readonly title: string;
    year?: number; // optional
    genre: string;
    rating: number;
    director: string;
}

const movie: Movie = {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    director: "Frank Darabont"
}

console.log(movie);
console.log(movie.title);
console.log(movie.genre);
console.log(movie.rating);
console.log(movie.year); // undefined
console.log(movie.director);

// movie.title = "Jurassic Park"; Error: Cannot assign to 'title' because it is a read-only property.