"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.default = {
    report: function (data) { return []; },
    termlog: function (type, data) {
        switch (type) {
            case "install-error":
                console.log(chalk_1.default.white(chalk_1.default.bgRed(" saffron ") + " " + data + (data.slice(-1) === "." ? "" : ".") + " Please consult our docs, at https://github.com/poiw-org/saffron/wiki."));
                return;
            default:
                console.log(chalk_1.default.black(chalk_1.default.bgGreen(" saffron ") + " " + data));
                return;
        }
    }
    // database,
    // orbit
};
