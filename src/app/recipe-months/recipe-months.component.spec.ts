import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMonthsComponent } from './recipe-months.component';

describe('RecipeMonthsComponent', () => {
  let component: RecipeMonthsComponent;
  let fixture: ComponentFixture<RecipeMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
