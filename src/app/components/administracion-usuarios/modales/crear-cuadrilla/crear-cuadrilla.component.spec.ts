import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuadrillaComponent } from './crear-cuadrilla.component';

describe('CrearCuadrillaComponent', () => {
  let component: CrearCuadrillaComponent;
  let fixture: ComponentFixture<CrearCuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCuadrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
