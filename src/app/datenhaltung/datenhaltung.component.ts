import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datenhaltung',
  template: `
    <p>
    Ein wichtiges Prinzip der Service-orientierten Architektur bzw. SPA ist die Kommunika-tion zwischen View, Model und ViewModel sowie der hierfür notwendige Datenfluss.
Hierbei kommen zwei Kommunikationsmustern zum Einsatz, One-Way-Binding sowie auch Two-Way-Binding, wobei hier nach vier Aspekten unterschieden werden muss [2, p. 396]:<br>
•	Rückmeldung über den Miss-/Erfolg des Datenaufrufs<br>
•	Rückmeldung über das Ergebnis des Datenaufrufs<br>
•	Rückmeldung außerhalb der Anfrage zu einem späteren Zeitpunkt (Asynchronität)<br>
•	Aufbau einer Sitzung: exklusive Nutzung durch einen einzelnen Service<br>
    </p>
  `,
  styles: [
  ]
})
export class DatenhaltungComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
