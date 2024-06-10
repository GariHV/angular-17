import { Component } from '@angular/core';

interface Precio {
  value: number;
  descuentoAplicado: boolean;
}

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  precio: Precio = {
    value: 0,
    descuentoAplicado: false
  };

  incrementar(): void {
    let { value } = this.precio;
    value++;
    this.precio.value = value;
  }

  restar(): void {
    let { value } = this.precio;
    value--;
    this.precio.value = value;
  }

  reset(): void {
    let { value } = this.precio;
    value = 0;
    this.precio.value = value;
  }

  applyDiscount(discount: number): void {
    let { value } = this.precio;
    value = value * (1 - discount / 100);
    this.precio.value = value;
    this.precio.descuentoAplicado = true;
  }
}
