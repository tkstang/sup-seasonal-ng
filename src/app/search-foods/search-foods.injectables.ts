import {
  SearchFoodsService,
  API_URL,
} from './search-foods.service';

export const searchFoodsInjectables: Array<any> = [
  {provide: SearchFoodsService, useClass: SearchFoodsService},
  {provide: API_URL, useValue: API_URL}
];
