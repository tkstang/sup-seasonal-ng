import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'search-months',
  templateUrl: './search-months.component.html',
  styleUrls: ['./search-months.component.css']
})
export class SearchMonthsComponent implements OnInit {
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
  private searchMonth() {
    console.log("hello");
    return this.http.get(`http://supseasonal.herokuapp.com/api/months/${this.selectedMonth}`).map((response: Response) => {
      console.log('hi');
      return (<any>response.json()).map(item => {
        console.log("raw item", item);
        return new MonthsResults({
          foodName: item.foodName,
          jan: item.jan,
          feb: item.feb,
          mar: item.mar,
          apr: item.apr,
          may: item.may,
          jun: item.jun,
          jul: item.jul,
          aug: item.aug,
          sep: item.sep,
          oct: item.oct,
          nov: item.nov,
          dec: item.dec
        })
      })
    })
  }
  // months: SelectItem[];
  // selectedMonth: string;

  constructor(public http: Http) { }

  ngOnInit() {
  }

}
