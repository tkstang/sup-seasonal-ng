import { Component, OnInit } from '@angular/core';
import { RecipesResult } from '../recipes-result/recipes-result.model';
import { RecipesResultsListComponent } from '../recipes-results-list/recipes-results-list.component';

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
    console.log("results:", this.results); // uncomment to take a look
  }

}
