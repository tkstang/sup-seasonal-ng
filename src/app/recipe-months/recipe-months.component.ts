import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Month } from '../search-months/month';
import { NgModule } from '@angular/core';
import { RecipesResult } from '../recipes-result/recipes-result.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { SearchRecipesService } from './search-recipes.service';

@Component({
  selector: 'recipe-months',
  templateUrl: './recipe-months.component.html',
  styleUrls: ['./recipe-months.component.css']
})
export class RecipeMonthsComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<RecipesResult[]> = new EventEmitter<RecipesResult[]>();

  months = [
    new Month('jan', 'January'),
    new Month('feb', 'February'),
    new Month('mar', 'March'),
    new Month('apr', 'April'),
    new Month('may', 'May'),
    new Month('jun', 'June'),
    new Month('jul', 'July'),
    new Month('aug', 'August'),
    new Month('sep', 'September'),
    new Month('oct', 'October'),
    new Month('nov', 'November'),
    new Month('dec', 'December'),
  ];
  selectedMonth: string = null;
  dropdownSelect(value: string): void {
    this.selectedMonth = value;
    console.log(this.selectedMonth);
  }

  searchRecipes(query) {
    Observable.fromEvent(this.el.nativeElement, 'click')
      .map((query: string) => this.recipesSearch.search(this.selectedMonth))
      .switch()
      .subscribe(
      (results: RecipesResult[]) => { // on sucesss
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => { // on error
        this.loading.emit(false);
      },
      () => { // on completion
        this.loading.emit(false);
      });
  }

  constructor(
    private http: Http,
    private recipesSearch: SearchRecipesService,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

}
