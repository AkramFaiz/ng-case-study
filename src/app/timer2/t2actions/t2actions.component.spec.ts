import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2actionsComponent } from './t2actions.component';

describe('T2actionsComponent', () => {
  let component: T2actionsComponent;
  let fixture: ComponentFixture<T2actionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2actionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2actionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
