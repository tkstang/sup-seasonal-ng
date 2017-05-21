import { Component, OnInit, Input } from '@angular/core';

import { MonthsResults } from '../models/months-results.model';

@Component({
  selector: 'months-results',
  templateUrl: './months-results.component.html',
  styleUrls: ['./months-results.component.css']
})
export class MonthsResultsComponent implements OnInit {
  @Input() result: MonthsResults;

  constructor() { }

  ngOnInit() {
  }

}
