import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2clicksComponent } from './t2clicks.component';

describe('T2clicksComponent', () => {
  let component: T2clicksComponent;
  let fixture: ComponentFixture<T2clicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2clicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2clicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
