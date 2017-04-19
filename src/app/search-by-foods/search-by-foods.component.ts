import { Component, OnInit } from '@angular/core';
import { FoodsResult } from '../foods-result/foods-result.model';
import { FoodsResultListComponent } from '../foods-result-list/foods-result-list.component';

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
    console.log("results:", this.results); // uncomment to take a look
  }


}
