import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringArrayCompareComponent } from './string-array-compare.component';

describe('StringArrayCompareComponent', () => {
  let component: StringArrayCompareComponent;
  let fixture: ComponentFixture<StringArrayCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringArrayCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringArrayCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
