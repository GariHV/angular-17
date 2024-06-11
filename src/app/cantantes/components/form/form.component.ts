import {Component, EventEmitter, Output} from '@angular/core';
import {Cantantes} from "../../interfaces/cantantes.interfaces";

@Component({
  selector: 'app-cantantes-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  @Output()
  onNewCantante: EventEmitter<Cantantes> = new EventEmitter<Cantantes>()

  public nuevoCantante: Cantantes = {
    name: "",
    age: 0
  }

  addCantante(): void{
    console.log(this.nuevoCantante)
    this.onNewCantante.emit(this.nuevoCantante)
    // this.nuevoCantante.name = "";
  }
}
