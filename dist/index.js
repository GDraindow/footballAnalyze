"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
// 데이터 소스가 하드코딩 되어있음 => 데이터 추출을 재사용가능하게 할 수 있는 방법은?
// csvFileReader class를 만들어서 해결
// 문제3: 모든 데이터가 문자열로 파싱됨 => 각 속성에 맞게 데이터를 바꾸어 주어야함
const reader = new CsvFileReader_1.CsvFileReader("./football.csv");
reader.read();
// "H","A"가 하드코딩되어있음 - emun을 이용
let manUnitiedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitiedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitiedWins++;
    }
}
console.log(manUnitiedWins);
