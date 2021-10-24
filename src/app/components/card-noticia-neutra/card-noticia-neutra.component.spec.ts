import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticiaNeutraComponent } from './card-noticia-neutra.component';

describe('CardNoticiaNeutraComponent', () => {
  let component: CardNoticiaNeutraComponent;
  let fixture: ComponentFixture<CardNoticiaNeutraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNoticiaNeutraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoticiaNeutraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
