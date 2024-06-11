import {Component} from '@angular/core';
import {Cantantes} from "../interfaces/cantantes.interfaces";

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public cantantes: Cantantes[] = [
    { name: 'Luis Miguel', age: 51 },
    { name: 'Ricardo Montaner', age: 62 },
    { name: 'Alejandro Fernandez', age: 50 },
    { name: 'Ricardo Arjona', age: 57 }
  ]

  add(cantante: Cantantes){
    console.log(cantante.name)
    this.cantantes.push(cantante)
  }

}
