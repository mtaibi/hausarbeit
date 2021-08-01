import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erklaerung-mvc-mvvm-etc',
  template: `
    <p>
    Der überwiegende Teil der Funktionalitäten von objektorientierten Systemen spielt sich im Zusammenspiel von Geschäftslogik, Ansicht sowie Steuerung mit dem User ab.
    Das wichtigste Architekturmuster für die Präsentation von objektorientierten Applikatio-nen stellt hierbei die MVC-Architektur dar. Das Model steht hierbei für die
    Daten der Anwendung sowie alle Operationen darauf wie beispielsweise deren Speicherung.
    Die Aufgabe der View besteht in der Darstellung der Daten des Models.
    Der Controller nimmt schlussendlich die Eingaben des Users entgegen, leitet diese an die Views sowie an das Model weiter und verbindet dadurch das Model mit dem Nutzer.

    </p>
    <img src="/assets/MVC.jpg" alt="image">
  `,
  styles: [
  ]
})
export class ErklaerungMvcMvvmEtcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
