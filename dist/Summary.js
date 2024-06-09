"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalusis_1 = require("./analyzer/WinsAnalusis");
const HTMReport_1 = require("./reportTarget/HTMReport");
class Summary {
    static WinsAnalysusWithHtmlReport(team) {
        return new Summary(new WinsAnalusis_1.WinsAnalysis(team), new HTMReport_1.HtmlReport);
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
