// Degleration Merging: When a class or interface is extended, it can be modified to add new properties or methods.
// Reopening an interface: When a class or interface is extended, it can be modified to add new properties or methods.

// Original interface
interface Car {
  model: string;
  start(): void;
}

// Reopening the interface to add new properties and methods
interface Car {
  stop(): void;
  year: number;
}

// Implementing the reopened interface
const myCar: Car = {
  model: "Toyota",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  },
  year: 2022,
};

myCar.start();
myCar.stop();
console.log(myCar.year, myCar.model);