import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsResultsComponent } from './months-results.component';

describe('MonthsResultsComponent', () => {
  let component: MonthsResultsComponent;
  let fixture: ComponentFixture<MonthsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
