import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoGBComponent } from './contacto-gb.component';

describe('ContactoGBComponent', () => {
  let component: ContactoGBComponent;
  let fixture: ComponentFixture<ContactoGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
