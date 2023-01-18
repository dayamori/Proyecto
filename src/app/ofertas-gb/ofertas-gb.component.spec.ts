import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasGBComponent } from './ofertas-gb.component';

describe('OfertasGBComponent', () => {
  let component: OfertasGBComponent;
  let fixture: ComponentFixture<OfertasGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
