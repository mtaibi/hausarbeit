import { Component, OnInit } from '@angular/core';
import {StudentenComponent } from '../studenten/studenten.component'

@Component({
  selector: 'app-two-way-binding',
  template: `
  <br>
  <app-studenten></app-studenten>
   <!-- <input [(ngModel)]="name"  type="text">
    <img src="/assets/twoWayBinding.jpg" alt="Two-Way-Binding">
    {{name}}-->
  <br>
  <p> Two-Way-Databinding stellt die Verbindung zwischen den HTML-Elementen im HTML Dokument und in Template-Dateien mit den Daten und dem Code in der Anwendung</p>
  <br>

  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  student

  public name="";

  constructor() { }

  ngOnInit(): void {
  }

}
