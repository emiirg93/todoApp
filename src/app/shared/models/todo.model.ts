export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.id = Math.floor(Math.random() * 1000); // Genera un ID aleatorio entre 0 y 999
    this.texto = texto;
    this.completado = false;
  }
}
