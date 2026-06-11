import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Contato, TipoContato } from '../models/contato';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})
export class AdicionaContato {

  formulario: FormGroup;
  contatos: Contato[] = [];

  tipos = Object.values(TipoContato);

  // Mensagem de erro
  mensagemErro = '';

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aniversario: [''],
      tipo: ['', Validators.required]
    });
  }

  adicionarContato() {

    if (this.formulario.invalid) {
      this.mensagemErro =
        'Preencha todos os campos corretamente. Verifique se o e-mail é válido.';
      return;
    }

    this.mensagemErro = '';

    const dados = this.formulario.value;

    this.contatos.push(
      new Contato(
        dados.nome,
        dados.telefone,
        dados.email,
        dados.aniversario,
        dados.tipo
      )
    );

    this.formulario.reset();
  }
}