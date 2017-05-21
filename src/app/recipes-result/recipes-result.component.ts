import { Component, OnInit, Input } from '@angular/core';

import { RecipesResult } from '../models/recipes-result.model';

@Component({
  selector: 'recipes-result',
  templateUrl: './recipes-result.component.html',
  styleUrls: ['./recipes-result.component.css']
})
export class RecipesResultComponent implements OnInit {
  @Input() result: RecipesResult;

  constructor() { }

  ngOnInit() {
  }

}
