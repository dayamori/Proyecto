import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioGBComponent } from './inicio-gb.component';

describe('InicioGBComponent', () => {
  let component: InicioGBComponent;
  let fixture: ComponentFixture<InicioGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
