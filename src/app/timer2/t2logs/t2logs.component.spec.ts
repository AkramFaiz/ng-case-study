import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2logsComponent } from './t2logs.component';

describe('T2logsComponent', () => {
  let component: T2logsComponent;
  let fixture: ComponentFixture<T2logsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2logsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2logsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
