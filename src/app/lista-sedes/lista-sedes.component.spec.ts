import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSedesComponent } from './lista-sedes.component';

describe('ListaSedesComponent', () => {
  let component: ListaSedesComponent;
  let fixture: ComponentFixture<ListaSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaSedesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
