import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountClicksComponent } from './count-clicks.component';

describe('CountClicksComponent', () => {
  let component: CountClicksComponent;
  let fixture: ComponentFixture<CountClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
