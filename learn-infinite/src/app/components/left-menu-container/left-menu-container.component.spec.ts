import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuContainerComponent } from './left-menu-container.component';

describe('LeftMenuContainerComponent', () => {
  let component: LeftMenuContainerComponent;
  let fixture: ComponentFixture<LeftMenuContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftMenuContainerComponent]
    });
    fixture = TestBed.createComponent(LeftMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
