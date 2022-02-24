import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPropertiesComponent } from './string-properties.component';

describe('StringPropertiesComponent', () => {
  let component: StringPropertiesComponent;
  let fixture: ComponentFixture<StringPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
