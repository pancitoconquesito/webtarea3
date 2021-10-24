import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioScreenComponent } from './formulario-screen.component';

describe('FormularioScreenComponent', () => {
  let component: FormularioScreenComponent;
  let fixture: ComponentFixture<FormularioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
