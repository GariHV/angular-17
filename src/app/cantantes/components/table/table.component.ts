import {Component, Input} from '@angular/core';
import {Cantantes} from "../../interfaces/cantantes.interfaces";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-cantantes-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',

})
export class TableComponent {

  @Input()
  public cantantesList: Cantantes[] = [
    { name: 'Luis Miguel', age: 51 },
  ]
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cantantesList, event.previousIndex, event.currentIndex);
  }
}
