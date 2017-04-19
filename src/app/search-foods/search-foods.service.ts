import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FoodsResult } from '../foods-result/foods-result.model';

export const API_URL = 'http://supseasonal.herokuapp.com/api/';

@Injectable()
export class SearchFoodsService {
  constructor(private http: Http,
    @Inject(API_URL) private apiUrl: string) {

    }

    search(food: number): Observable<FoodsResult[]> {
      let queryUrl = `${this.apiUrl}foods/${food}`;
      console.log("apiUrl:", this.apiUrl)
      return this.http.get(queryUrl)
        .map((response: Response) => {
          console.log("in search");
          // return console.log(response);
          return (<any>response.json()).map(item => {
            console.log("raw item", item);
            return new FoodsResult({
              foodName: item.food_name,
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
