import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByMonthComponent } from './search-by-month.component';

describe('SearchByMonthComponent', () => {
  let component: SearchByMonthComponent;
  let fixture: ComponentFixture<SearchByMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
