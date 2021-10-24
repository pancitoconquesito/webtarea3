import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticiaExtendidaComponent } from './card-noticia-extendida.component';

describe('CardNoticiaExtendidaComponent', () => {
  let component: CardNoticiaExtendidaComponent;
  let fixture: ComponentFixture<CardNoticiaExtendidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNoticiaExtendidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoticiaExtendidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
