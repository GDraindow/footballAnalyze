"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const Utils_1 = require("./Utils");
class CsvFileReader {
    constructor(filname) {
        this.filname = filname;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filname, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map((row) => {
            return [
                (0, Utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;