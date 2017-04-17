import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MonthsResults } from '../months-results/months-results.model';

export const SUP_API_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class MonthSearchService {
  constructor(private http: Http,
    @Inject(SUP_API_URL) private apiUrl: string) {

    }

    search(query: string): Observable<SearchResult[]> {
      const queryUrl = `${this.apiUrl}${query}`;
      return this.http.get(queryUrl)
      .map((response: Response) => {
        // return console.log(response);
        return (<any>response.json()).items.map(item => {
          console.log("raw item", item);
          return new SearchResult({
            foodName: item.foodName,
            jan: item.jan,
            feb: item.feb,
            mar: item.mar,
            apr: item.apr,
            may: item.may,
            jun: item.jun,
            jul: item.jul,
            aug: item.aug,
            sep: item.sep,
            oct: item.oct,
            nov: item.nov,
            dec: item.dec
          })
        })
      })
    }
}
