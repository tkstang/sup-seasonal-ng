import {
  SearchRecipesService,
  API_URL,
} from './search-recipes.service';

export const searchRecipesInjectables: Array<any> = [
  { provide: SearchRecipesService, useClass: SearchRecipesService },
  { provide: API_URL, useValue: API_URL }
];
