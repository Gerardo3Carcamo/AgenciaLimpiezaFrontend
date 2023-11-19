import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAMiCuadrillaComponent } from './agregar-a-mi-cuadrilla.component';

describe('AgregarAMiCuadrillaComponent', () => {
  let component: AgregarAMiCuadrillaComponent;
  let fixture: ComponentFixture<AgregarAMiCuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAMiCuadrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAMiCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
