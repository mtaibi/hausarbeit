import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  template: `

      <p>Vom Model (title, title2, student, matrikelnummer, dozent): </p>
      <img src="/assets/oneWayBinding2.jpg" alt=""><br>
      <br>
      <p>In die View (das Ergebnis sehen Sie ganz oben auf der "Start-HTML"):</p>
      <img src="/assets/oneWayBinding1.jpg" alt="">

  `,
  styles: [
  ]
})
export class OneWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
