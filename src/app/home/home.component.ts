import { Component, OnInit } from '@angular/core';

import { MonthsResults } from '../models/months-results.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: MonthsResults[];
  loading: boolean;

  constructor() { }


  ngOnInit() {
  }

  updateResults(results: MonthsResults[]): void {
    this.results = results;
  }

}
