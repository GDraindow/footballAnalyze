import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzer/WinsAnalusis";
import { HtmlReport } from "./reportTarget/HTMReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
    static WinsAnalysusWithHtmlReport(team:string) {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport
        )
    }
  
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
