import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistadorComponent } from './enlistador.component';

describe('EnlistadorComponent', () => {
  let component: EnlistadorComponent;
  let fixture: ComponentFixture<EnlistadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
