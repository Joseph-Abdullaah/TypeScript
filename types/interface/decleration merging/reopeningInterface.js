// Degleration Merging: When a class or interface is extended, it can be modified to add new properties or methods.
// Reopening an interface: When a class or interface is extended, it can be modified to add new properties or methods.
// Implementing the reopened interface
var myCar = {
    model: "Toyota",
    start: function () {
        console.log("Car started");
    },
    stop: function () {
        console.log("Car stopped");
    },
    year: 2022,
};
myCar.start();
myCar.stop();
console.log(myCar.year, myCar.model);
;
