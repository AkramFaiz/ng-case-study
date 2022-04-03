import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountActionsComponent } from './count-actions.component';

describe('CountActionsComponent', () => {
  let component: CountActionsComponent;
  let fixture: ComponentFixture<CountActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
