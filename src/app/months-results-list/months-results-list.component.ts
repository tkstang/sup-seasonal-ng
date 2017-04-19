import { Component, OnInit } from '@angular/core';
import { MonthsResults } from '../months-results/months-results.model';
import { MonthsResultsComponent } from '../months-results/months-results.component';

@Component({
  selector: 'months-results-list',
  templateUrl: './months-results-list.component.html',
  styleUrls: ['./months-results-list.component.css']
})
export class MonthsResultsListComponent implements OnInit {
  results: MonthsResults[];
  loading: boolean;

  constructor() { }


  ngOnInit() {
  }

}
