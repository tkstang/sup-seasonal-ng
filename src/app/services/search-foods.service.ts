import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { FoodsResult } from '../models/foods-result.model';

export const API_URL = 'http://supseasonal.herokuapp.com/api/';

@Injectable()
export class SearchFoodsService {
  constructor(private http: Http,
    @Inject(API_URL) private apiUrl: string) {

  }

  search(food: number): Observable<FoodsResult[]> {
    const queryUrl = `${this.apiUrl}foods/${food}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
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
          });
        });
      });
  }
}
