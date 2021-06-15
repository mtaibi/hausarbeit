import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datenbindungen-typen',
  template: `
    <p>
    Datenbindungen sind in Vorlagen eingebettete Ausdrücke, die ausgewertet werden, um dynamische Inhalte im HTML-Dokument zu erzeugen.<br>
    Datenbindungen stellen die Verbindung zwischen den HTML-Elementen im HTML Dokument und in Template-Dateien mit den Daten und dem Code in der Anwendung.<br>
    </p>
  `,
  styles: [
  ]
})
export class DatenbindungenTypenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
