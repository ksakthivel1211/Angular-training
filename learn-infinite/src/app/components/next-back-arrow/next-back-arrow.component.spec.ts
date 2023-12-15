import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBackArrowComponent } from './next-back-arrow.component';

describe('NextBackArrowComponent', () => {
  let component: NextBackArrowComponent;
  let fixture: ComponentFixture<NextBackArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextBackArrowComponent]
    });
    fixture = TestBed.createComponent(NextBackArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
