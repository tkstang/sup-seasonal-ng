import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Food } from './food';
import { NgModule } from '@angular/core';
import { FoodsResult } from '../foods-result/foods-result.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { SearchFoodsService } from './search-foods.service';

@Component({
  selector: 'search-foods',
  templateUrl: './search-foods.component.html',
  styleUrls: ['./search-foods.component.css']
})
export class SearchFoodsComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<FoodsResult[]> = new EventEmitter<FoodsResult[]>();

  foodArr = [];

  selectedFood: number = null;
  private dropdownSelect(value: number): void {
    this.selectedFood = value;
    console.log(this.selectedFood);
  }

  searchFood(query) {
    console.log(query)
    console.log('hello')
    Observable.fromEvent(this.el.nativeElement, 'click')
      .map((query: number) => this.foodSearch.search(this.selectedFood))
      .switch()
      .subscribe(
      (results: FoodsResult[]) => { // on sucesss
        console.log('hi')
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => { // on error
        console.log(err);
        this.loading.emit(false);
      },
      () => { // on completion
        this.loading.emit(false);
      });
  }

  constructor(
    private http: Http,
    private foodSearch: SearchFoodsService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.http.request('http://supseasonal.herokuapp.com/api/foods')
      .subscribe((res: Response) => {
        return (<any>res.json().map((item) => {
          return this.foodArr.push(new Food(item.id, item.food_name))
        })
        )
      }
      )
  }

}
