import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesResultsListComponent } from './recipes-results-list.component';

describe('RecipesResultsListComponent', () => {
  let component: RecipesResultsListComponent;
  let fixture: ComponentFixture<RecipesResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
