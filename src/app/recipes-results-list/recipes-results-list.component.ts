import { Component, OnInit } from '@angular/core';
import { RecipesResult } from '../recipes-result/recipes-result.model';
import { RecipesResultComponent } from '../recipes-result/recipes-result.component';

@Component({
  selector: 'app-recipes-results-list',
  templateUrl: './recipes-results-list.component.html',
  styleUrls: ['./recipes-results-list.component.css']
})
export class RecipesResultsListComponent implements OnInit {
  results: RecipesResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
