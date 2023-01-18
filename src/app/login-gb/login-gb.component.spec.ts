import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGBComponent } from './login-gb.component';

describe('LoginGBComponent', () => {
  let component: LoginGBComponent;
  let fixture: ComponentFixture<LoginGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
