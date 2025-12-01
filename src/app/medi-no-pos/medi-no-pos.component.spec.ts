import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediNoPosComponent } from './medi-no-pos.component';

describe('MediNoPosComponent', () => {
  let component: MediNoPosComponent;
  let fixture: ComponentFixture<MediNoPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediNoPosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediNoPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
