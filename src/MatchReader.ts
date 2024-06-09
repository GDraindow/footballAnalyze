import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./Utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {

    static fromCsv(filname:string) {
        return new MatchReader(new CsvFileReader(filname))
    }

  matches : MatchData[] =[];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
        (row: string[]): MatchData => {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            <MatchResult>row[5],
            row[6],
        ];
    });
  }
}
