import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContadorComponent} from "../components/contador/contador.component";
import { ExampleComponent } from './example/example.component';
import {HeaderComponent} from "../components/header/header.component";
import {UserComponent} from "../components/user/user.component";
import {FormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {CantantesModule} from "./cantantes/cantantes.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ExampleComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CantantesModule,
    MatSlideToggleModule,
    MatButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
