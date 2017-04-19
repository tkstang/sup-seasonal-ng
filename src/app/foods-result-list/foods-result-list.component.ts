import { Component, OnInit } from '@angular/core';
import { FoodsResult } from '../foods-result/foods-result.model';
import { FoodsResultComponent } from '../foods-result/foods-result.component';

@Component({
  selector: 'foods-result-list',
  templateUrl: './foods-result-list.component.html',
  styleUrls: ['./foods-result-list.component.css']
})
export class FoodsResultListComponent implements OnInit {
  results: FoodsResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
