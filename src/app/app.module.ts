import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchFoodsComponent } from './search-foods/search-foods.component';
import { SearchMonthsComponent } from './search-months/search-months.component';
import { MonthsResultsComponent } from './months-results/months-results.component';
import { searchMonthsInjectables } from './search-months/search-months.injectables';
import { searchFoodsInjectables } from './search-foods/search-foods.injectables';
import { searchRecipesInjectables } from './recipe-months/search-recipes.injectables';
import { HomeComponent } from './home/home.component';
import { SearchByMonthComponent } from './search-by-month/search-by-month.component';
import { FoodsResultComponent } from './foods-result/foods-result.component';
import { SearchByFoodsComponent } from './search-by-foods/search-by-foods.component';
import { RecipesByMonthComponent } from './recipes-by-month/recipes-by-month.component';
import { RecipeMonthsComponent } from './recipe-months/recipe-months.component';
import { RecipesResultComponent } from './recipes-result/recipes-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'month', component: SearchByMonthComponent },
  { path: 'food', component: SearchByFoodsComponent },
  { path: 'recipes', component: RecipesByMonthComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchFoodsComponent,
    SearchMonthsComponent,
    MonthsResultsComponent,
    HomeComponent,
    SearchByMonthComponent,
    FoodsResultComponent,
    SearchByFoodsComponent,
    RecipesByMonthComponent,
    RecipeMonthsComponent,
    RecipesResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [searchMonthsInjectables, searchFoodsInjectables, searchRecipesInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
