import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Month } from './month';
import { NgModule } from '@angular/core';
import { MonthsResults } from '../months-results/months-results.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { SearchMonthsService } from './search-months.service';

@Component({
  selector: 'search-months',
  templateUrl: './search-months.component.html',
  styleUrls: ['./search-months.component.css']
})
export class SearchMonthsComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<MonthsResults[]> = new EventEmitter<MonthsResults[]>();

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
  private dropdownSelect(value: string): void {
    this.selectedMonth = value;
    console.log(this.selectedMonth);
  }

  searchMonth(query) {
    console.log(query)
    console.log('hello')
    Observable.fromEvent(this.el.nativeElement, 'click')
      //  .map((e: any) => e.target.value) // extract the value of the input
      //  .filter((text: string) => text.length > 1) // filter out if empty
      //  .debounceTime(250)                         // only once every 250ms
      //  .do(() => this.loading.emit(true))         // enable loading
      //  // search, discarding old events if new input comes in
      .map((query: string) => this.monthSearch.search(this.selectedMonth))
      .switch()
      // act on the return of the search
      .subscribe(
      (results: MonthsResults[]) => { // on sucesss
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
      }
      );
  }

  // private searchMonth(): Observable<MonthsResults[]> {
  //   return this.http.get(`http://supseasonal.herokuapp.com/api/months/${this.selectedMonth}`).map((response: Response) => {
  //     console.log('hi');
  //     return (<response.json()).map(item => {
  //       console.log("raw item", item);
  //       // return new MonthsResults({
  //       //   foodName: item.foodName,
  //       //   jan: item.jan,
  //       //   feb: item.feb,
  //       //   mar: item.mar,
  //       //   apr: item.apr,
  //       //   may: item.may,
  //       //   jun: item.jun,
  //       //   jul: item.jul,
  //       //   aug: item.aug,
  //       //   sep: item.sep,
  //       //   oct: item.oct,
  //       //   nov: item.nov,
  //       //   dec: item.dec
  //       // })
  //     })
  //   })
  // }
  // months: SelectItem[];
  // selectedMonth: string;

  constructor(
    private monthSearch: SearchMonthsService,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

}
