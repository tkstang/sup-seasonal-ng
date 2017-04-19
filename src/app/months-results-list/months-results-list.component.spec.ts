import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsResultsListComponent } from './months-results-list.component';

describe('MonthsResultsListComponent', () => {
  let component: MonthsResultsListComponent;
  let fixture: ComponentFixture<MonthsResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
