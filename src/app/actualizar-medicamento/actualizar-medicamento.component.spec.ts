import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMedicamentoComponent } from './actualizar-medicamento.component';

describe('ActualizarMedicamentoComponent', () => {
  let component: ActualizarMedicamentoComponent;
  let fixture: ComponentFixture<ActualizarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
