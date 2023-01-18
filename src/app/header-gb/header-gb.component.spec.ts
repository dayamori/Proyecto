import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGBComponent } from './header-gb.component';

describe('HeaderGBComponent', () => {
  let component: HeaderGBComponent;
  let fixture: ComponentFixture<HeaderGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
