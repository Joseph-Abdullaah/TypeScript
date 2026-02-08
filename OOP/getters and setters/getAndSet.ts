class Myclass {
    private _name: string;
    
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
} 

let obj = new Myclass();
obj.name = "John Doe";
console.log(obj.name); // Output: John Doe