import {Component} from "@angular/core";

interface User {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.components.html',
})

export class UserComponent {
  title:string = "Datos del usuario"
  user:User = {
    name: "",
    email: "",
    age: 25,
    isActive: true
  }

  public getName():string{
    return this.user.name;
  }

  public changeName(name: string):void{
    this.user.name = name;
  }

  public getAge():number{
    return this.user.age;
  }

  public getAllData():string{
    return `El nombre del usuario es ${this.user.name} y tiene ${this.user.age} años`;
  }
}
