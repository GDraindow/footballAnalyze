import fs from "fs";
import { dateStringToDate } from "./Utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filname: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filname, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      }
    )
    .map((row: string[]):MatchData => {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            <MatchResult>row[5],
            row[6]
        ];
    })
  }
}
