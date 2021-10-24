import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaActualScreenComponent } from './noticia-actual-screen.component';

describe('NoticiaActualScreenComponent', () => {
  let component: NoticiaActualScreenComponent;
  let fixture: ComponentFixture<NoticiaActualScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaActualScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaActualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
