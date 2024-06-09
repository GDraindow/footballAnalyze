"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.WinsAnalysusWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
// 데이터 소스가 하드코딩 되어있음 => 데이터 추출을 재사용가능하게 할 수 있는 방법은?
// csvFileReader class를 만들어서 해결
// 문제3: 모든 데이터가 문자열로 파싱됨 => 각 속성에 맞게 데이터를 바꾸어 주어야함
// "H","A"가 하드코딩되어있음 - emun을 이용
// 문제4. 맨유만 조회 가능?
// 문제5. 맨유 승리수만 조회 가능한걸?
// 문제6. console.log로만 report를 받아 볼꺼야?
