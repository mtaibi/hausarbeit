import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-crud-http',
  template: `
  <p>Mit der Version 4.3.1 wurde in Angular eine neue Version des HttpClient einge-führt, der sich am für eine Web-Anwendung typischen Einsatz orientiert und um den HttpInterceptor erweitert wurde <br>
    und das Abfangen von Http-Request sowie Http-Response gestattet. Dies ermöglicht dem Programmierer die entsprechenden Parameter und Header weiter zu spezifizieren und darauf reagieren zu können.<br>
    Beispielsweise können so Diagnose-, Zustands-, Authentifizierunginformationen oder auch Fehlerbehandlungen eingebunden werden. Ein klassisches Beispiel ist hier zum Beispiel die Einbindung von
    Ladebalken während eines Ladevorgangs. Durch die einmalige Einbindung des HttpInterceptors in die Root-Komponente einer Anwendung ist dieser systemweit nutzbar und kann in flexibel in <br>
    entsprechende Module eingebunden werden, beispielsweise um einen trägen Ladevor-gang dieses Moduls untersuchen zu können.
 </p>

  <app-dozenten></app-dozenten>

  `,
  styles: [
  ],
})

export class RestCrudHttpComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
