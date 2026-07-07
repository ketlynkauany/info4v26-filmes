import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaService } from '../services/agenda.service';
import { AdicionaContato } from './adiciona-contato';

describe('AdicionaContato', () => {
  let component: AdicionaContato;
  let fixture: ComponentFixture<AdicionaContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionaContato],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionaContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

