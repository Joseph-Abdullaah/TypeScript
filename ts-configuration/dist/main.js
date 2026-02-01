"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
console.log((0, utils_1.multiply)(2, 3)); // ✅ OK
console.log((0, utils_1.multiply)("2", 3)); // ❌ Type error
