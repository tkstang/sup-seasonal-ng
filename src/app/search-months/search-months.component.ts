import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

// moved your imports below 3rd party imports.
import { SearchMonthsService } from '../services/search-months.service';
import { MonthsResults } from '../models/months-results.model';
import { Month } from '../models/month.model';


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
  dropdownSelect(value: string): void {
    this.selectedMonth = value;
    console.log(this.selectedMonth);
  }

  searchMonth(query) {
    Observable.fromEvent(this.el.nativeElement, 'click')
      .map((query: string) => this.monthSearch.search(this.selectedMonth))
      .switch()
      .subscribe(
      (results: MonthsResults[]) => { // on sucesss
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
    private monthSearch: SearchMonthsService,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

}
