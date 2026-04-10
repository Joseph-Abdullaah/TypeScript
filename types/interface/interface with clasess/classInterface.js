var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car started");
    };
    Car.prototype.stop = function () {
        console.log("Car stopped");
    };
    return Car;
}());
var myCar = new Car();
myCar.start();
myCar.stop();
