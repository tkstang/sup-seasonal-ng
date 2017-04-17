import {
  SearchMonthsService,
  API_URL,
} from './search-months.service';

export const searchMonthsInjectables: Array<any> = [
  {provide: SearchMonthsService, useClass: SearchMonthsService},
  {provide: API_URL, useValue: SearchMonthsService}
];
