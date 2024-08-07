"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreFunction = void 0;
var secure_1 = require("@riggs/secure");
var coreFunction = function () {
    (0, secure_1.secureFunction)();
    console.log("Core function");
};
exports.coreFunction = coreFunction;
