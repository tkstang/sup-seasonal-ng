import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesResultComponent } from './recipes-result.component';

describe('RecipesResultComponent', () => {
  let component: RecipesResultComponent;
  let fixture: ComponentFixture<RecipesResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
