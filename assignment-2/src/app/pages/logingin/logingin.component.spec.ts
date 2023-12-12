import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginginComponent } from './logingin.component';

describe('LoginginComponent', () => {
  let component: LoginginComponent;
  let fixture: ComponentFixture<LoginginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginginComponent]
    });
    fixture = TestBed.createComponent(LoginginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
