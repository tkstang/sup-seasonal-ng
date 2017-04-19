import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesByMonthComponent } from './recipes-by-month.component';

describe('RecipesByMonthComponent', () => {
  let component: RecipesByMonthComponent;
  let fixture: ComponentFixture<RecipesByMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesByMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
