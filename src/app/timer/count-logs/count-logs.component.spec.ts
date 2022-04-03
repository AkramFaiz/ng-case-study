import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLogsComponent } from './count-logs.component';

describe('CountLogsComponent', () => {
  let component: CountLogsComponent;
  let fixture: ComponentFixture<CountLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
