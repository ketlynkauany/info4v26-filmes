import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private contatos: Contato[] = [];

  constructor() { }

  existe(c: Contato): boolean {
    return this.contatos.find(contato =>
      contato.getEmail() === c.getEmail()
    ) !== undefined;
  }

  adicionar(c: Contato): boolean {
    if (!this.existe(c)) {
      this.contatos.push(c);
      return true;
    }

    return false;
  }

  remover(c: Contato): boolean {
    const indice = this.contatos.indexOf(c);

    if (indice >= 0) {
      this.contatos.splice(indice, 1);
      return true;
    }

    return false;
  }

  obterTodos(): Contato[] {
    return this.contatos;
  }
}