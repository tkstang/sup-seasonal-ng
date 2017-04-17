import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMonthsComponent } from './search-months.component';

describe('SearchMonthsComponent', () => {
  let component: SearchMonthsComponent;
  let fixture: ComponentFixture<SearchMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
