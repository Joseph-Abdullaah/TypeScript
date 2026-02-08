var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Object.defineProperty(Myclass.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Myclass;
}());
var obj = new Myclass();
obj.name = "John Doe";
console.log(obj.name); // Output: John Doe
