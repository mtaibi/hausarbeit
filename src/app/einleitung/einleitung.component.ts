import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-einleitung',
  template: `
    <p>
    Stand Januar 2021 nutzten weltweit mehr als 5,22 Milliarden Menschen ein Mobiltelefon sowie mehr als 4,66 Milliarden Menschen das Internet.
    Die schiere Menge an Nutzern und Clients sowie der Nutzung von serviceorientierte Architekturen stellt <br>
    die Entwickler jedoch vor einige Schwierigkeiten in der verteilten Datenhaltung.
    Als grundlegende Probleme lassen sich die Zuverlässigkeit von Netzwerken, die zur Verfügung stehende Bandbreite, Netzwerktopologien (wie z.B. UMTS, LTE, 5G, WLAN – auch im Wechsel), „Kosten“ für den Datentransport sowie die Netzwerksicherheit identifizieren. [2]
    <br>
    <br>

    <img src="/assets/statistik.png" height="500px" width="800px">
  `,
  styles: [
  ]
})
export class EinleitungComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
