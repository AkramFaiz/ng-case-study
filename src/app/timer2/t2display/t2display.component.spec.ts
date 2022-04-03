import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2displayComponent } from './t2display.component';

describe('T2displayComponent', () => {
  let component: T2displayComponent;
  let fixture: ComponentFixture<T2displayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2displayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2displayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
