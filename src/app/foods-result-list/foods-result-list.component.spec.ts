import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsResultListComponent } from './foods-result-list.component';

describe('FoodsResultListComponent', () => {
  let component: FoodsResultListComponent;
  let fixture: ComponentFixture<FoodsResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
