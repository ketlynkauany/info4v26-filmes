export enum TipoContato {
  AMIGO = 'Amigo',
  FAMILIA = 'Família',
  TRABALHO = 'Trabalho',
  OUTRO = 'Outro'
}

export class Contato {
  private nome: string;
  private telefone: string;
  private email: string;
  private aniversario: string;
  private tipo: TipoContato;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    aniversario: string,
    tipo: TipoContato
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getAniversario(): string {
    return this.aniversario;
  }

  setAniversario(aniversario: string): void {
    this.aniversario = aniversario;
  }

  getTipo(): TipoContato {
    return this.tipo;
  }

  setTipo(tipo: TipoContato): void {
    this.tipo = tipo;
  }
}