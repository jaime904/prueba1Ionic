import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaParticipantePage } from './lista-participante.page';

describe('ListaParticipantePage', () => {
  let component: ListaParticipantePage;
  let fixture: ComponentFixture<ListaParticipantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
