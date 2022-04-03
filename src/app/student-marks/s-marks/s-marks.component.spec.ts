import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMarksComponent } from './s-marks.component';

describe('SMarksComponent', () => {
  let component: SMarksComponent;
  let fixture: ComponentFixture<SMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
