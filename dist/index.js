"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStates = void 0;
var react_1 = __importDefault(require("react"));
var useStates = function (states, data) {
    var o = react_1.default.useState;
    var array = [];
    for (var i = 0; i < states; i++)
        array[i] = i;
    return array.map(function (a, i) {
        if (data) {
            var _a = o(data[i] ? data[i] : undefined), get = _a[0], set = _a[1];
            return { get: get, set: set };
        }
        else {
            var _b = o(), get = _b[0], set = _b[1];
            return { get: get, set: set };
        }
    });
};
exports.useStates = useStates;
