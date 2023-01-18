import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGBComponent } from './footer-gb.component';

describe('FooterGBComponent', () => {
  let component: FooterGBComponent;
  let fixture: ComponentFixture<FooterGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
