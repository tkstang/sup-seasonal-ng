import { Component, OnInit } from '@angular/core';

import { FoodsResult } from '../models/foods-result.model';

@Component({
  selector: 'app-search-by-foods',
  templateUrl: './search-by-foods.component.html',
  styleUrls: ['./search-by-foods.component.css']
})
export class SearchByFoodsComponent implements OnInit {
  results: FoodsResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: FoodsResult[]): void {
    this.results = results;
  }


}
