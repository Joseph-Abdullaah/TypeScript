interface MathOperation {
    (a: number, b: number): number // Function signature
}

const add: MathOperation = (a, b) => a + b
const sub: MathOperation = (a, b) => a - b
const mul: MathOperation = (a, b) => a * b
const div: MathOperation = (a, b) => a / b

console.log(add(1, 2))
console.log(sub(5, 2))
console.log(mul(10, 14))
console.log(div(10, 5))



interface Person {
    name: string;
    age: number;
    great(): void;
}

const person: Person = {
    name: "John",
    age: 30,
    great() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const displayInfo = (person: Person):void => {
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
    person.great()
}

displayInfo(person)


interface Song {
    title: string;
    artist: string;
    printSongInfo(title: string, artist: string): string;
}

const song1: Song = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    printSongInfo(title: string, artist: string): string {
        return `${title} by ${artist}`;
    }
}

console.log(song1.title)
console.log(song1.artist)
console.log(song1.printSongInfo(song1.title, song1.artist))