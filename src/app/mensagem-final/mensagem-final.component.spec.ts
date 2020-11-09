import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemFinalComponent } from './mensagem-final.component';

describe('MensagemFinalComponent', () => {
  let component: MensagemFinalComponent;
  let fixture: ComponentFixture<MensagemFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
