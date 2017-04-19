import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsResultComponent } from './foods-result.component';

describe('FoodsResultComponent', () => {
  let component: FoodsResultComponent;
  let fixture: ComponentFixture<FoodsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
