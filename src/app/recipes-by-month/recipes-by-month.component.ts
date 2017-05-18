import { Component, OnInit } from '@angular/core';

import { RecipesResult } from '../models/recipes-result.model';

@Component({
  selector: 'recipes-by-month',
  templateUrl: './recipes-by-month.component.html',
  styleUrls: ['./recipes-by-month.component.css']
})
export class RecipesByMonthComponent implements OnInit {
  results: RecipesResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: RecipesResult[]): void {
    this.results = results;
  }

}
