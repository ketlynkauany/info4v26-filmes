import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcula-media',
  imports: [FormsModule],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss'
})
export class CalculaMedia {

  nota1: number = 0;
  nota2: number = 0;
  notaAvFinal: number = 0;

  mediaParcial: number = 0;
  mediaFinal: number = 0;

  situacao: string = '';

  calcularMedia() {

    this.mediaParcial = (this.nota1 + this.nota2) / 2;

    this.mediaFinal = (this.mediaParcial + this.notaAvFinal) / 2;

    if (this.mediaFinal >= 6) {
      this.situacao = 'Aprovado';
    } else {
      this.situacao = 'Reprovado';
    }

  }

}