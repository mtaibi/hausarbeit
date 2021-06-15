import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datenbindung',
  template: `
    <br>
    <p>
    Datenbindungen sind in Vorlagen eingebettete Ausdrücke, die ausgewertet werden, um dynamische Inhalte im HTML-Dokument zu erzeugen.<br>
    <br>
    Datenbindungen stellen die Verbindung zwischen den HTML-Elementen im HTML Dokument und in Template-Dateien mit den Daten und dem Code in der Anwendung.<br>
    <br>
    Datenbindungen werden angewendet als Attribute auf HTML-Elemente oder als spezielle Zeichenfolgen von Zeichen in Zeichenketten.
    </p>
    <img src="/assets/Datenbindung.jpg" alt="">
  `,
  styles: [
  ]
})
export class DatenbindungComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
