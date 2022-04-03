import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivComponent } from './dynamic-div.component';

describe('DynamicDivComponent', () => {
  let component: DynamicDivComponent;
  let fixture: ComponentFixture<DynamicDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
