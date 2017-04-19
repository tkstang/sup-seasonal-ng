import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RecipesResult } from '../recipes-result/recipes-result.model';

export const API_URL = 'http://supseasonal.herokuapp.com/api/';

@Injectable()
export class SearchRecipesService {
  constructor(private http: Http,
    @Inject(API_URL) private apiUrl: string) {

  }

  search(month: string): Observable<RecipesResult[]> {
    const queryUrl = `${this.apiUrl}months/${month}/recipes`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
          return new RecipesResult({
            id: item.id,
            servings: item.servingsa,
            title: item.title,
            readyInMinutes: item.readyInMinutes,
            image: item.image,
            extendedIngredients: item.extendedIngredients,
            instructions: item.instructions,
          });
        });
      });
  }
}
