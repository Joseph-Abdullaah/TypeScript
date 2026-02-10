var add = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
var mul = function (a, b) { return a * b; };
var div = function (a, b) { return a / b; };
console.log(add(1, 2));
console.log(sub(5, 2));
console.log(mul(10, 14));
console.log(div(10, 5));
var person = {
    name: "John",
    age: 30,
    great: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
};
var displayInfo = function (person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    person.great();
};
displayInfo(person);
var song1 = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    printSongInfo: function (title, artist) {
        return "".concat(title, " by ").concat(artist);
    }
};
console.log(song1.title);
console.log(song1.artist);
console.log(song1.printSongInfo(song1.title, song1.artist));
