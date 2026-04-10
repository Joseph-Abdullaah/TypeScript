interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();