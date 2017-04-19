import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByFoodsComponent } from './search-by-foods.component';

describe('SearchByFoodsComponent', () => {
  let component: SearchByFoodsComponent;
  let fixture: ComponentFixture<SearchByFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
