import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2homeComponent } from './t2home.component';

describe('T2homeComponent', () => {
  let component: T2homeComponent;
  let fixture: ComponentFixture<T2homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2homeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
