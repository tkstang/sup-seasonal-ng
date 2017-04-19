import { Component, OnInit, Input } from '@angular/core';
import { FoodsResult } from './foods-result.model';

@Component({
  selector: 'foods-result',
  templateUrl: './foods-result.component.html',
  styleUrls: ['./foods-result.component.css']
})
export class FoodsResultComponent implements OnInit {
  @Input() result: FoodsResult;

  constructor() { }

  ngOnInit() {
  }

}
