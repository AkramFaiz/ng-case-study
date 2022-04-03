import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECatComponent } from './e-cat.component';

describe('ECatComponent', () => {
  let component: ECatComponent;
  let fixture: ComponentFixture<ECatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
