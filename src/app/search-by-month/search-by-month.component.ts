import { Component, OnInit } from '@angular/core';
import { MonthsResults } from '../months-results/months-results.model';

@Component({
  selector: 'search-by-month',
  templateUrl: './search-by-month.component.html',
  styleUrls: ['./search-by-month.component.css']
})
export class SearchByMonthComponent implements OnInit {
  results: MonthsResults[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: MonthsResults[]): void {
    this.results = results;
  }

}
