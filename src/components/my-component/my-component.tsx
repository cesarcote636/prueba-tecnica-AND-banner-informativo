import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() image: "";

  @Prop() destino: "";

  @Prop() texto: "";

  @Prop() auxiliar: "";

  @Prop() fondo: "";

  @Prop() texto2: "";


  private getTexto(): string {
    return this.texto
  }

  private getpathImage(): string {
    return this.image
  }

  private getUrlDestino(): string {
    return this.destino
  }

  private getTextoAuxiliar(): string {
    return this.auxiliar
  }


  private getColorFondo(): string {
    return this.fondo
  }

  private getColorTexto(): string {
    return this.texto2
  }

  render() {
    return <div class='flex flex-col'>
      <div class='flex justify-between p-2 pl-2 pr-2 lg:pl-10 lg:pr-10' style={{ backgroundColor: this.getColorFondo() }}>
        <div class='flex space-x-4 items-center'>
          <img src={this.getpathImage()} class='h-5 w-5' alt="imagen alerta"></img>
            <a class='hover:underline' href={this.getUrlDestino()} target='_blank' style={{ color: this.getColorTexto() }}>{this.getTexto()}</a>
        </div>
        <p class='p-2 pl-2 pr-2 lg:pl-10 lg:pr-10 underline text-white'>{this.getTextoAuxiliar()}</p>
      </div>
    </div>;
  }
  }
