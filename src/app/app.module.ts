import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SuiModule } from 'ng2-semantic-ui';
import {
  RouterModule,
  Routes
} from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SearchFoodsComponent } from './search-foods/search-foods.component';
import { SearchMonthsComponent } from './search-months/search-months.component';
import { MonthsResultsComponent } from './months-results/months-results.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: AppComponent },
//   { path: 'login', component: LoginComponent },
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SearchFoodsComponent,
    SearchMonthsComponent,
    MonthsResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
