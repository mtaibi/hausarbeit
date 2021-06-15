import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erklaerung-mvc-mvvm-etc',
  template: `
    <p>
    Model View Controller (MVC, englisch für Modell-Präsentation-Steuerung) ist ein Muster zur Unterteilung einer Software in die drei Komponenten Datenmodell (englisch model), Präsentation (englisch view) und Programmsteuerung (englisch controller).<br>
    Das Muster kann sowohl als Architekturmuster als auch als Entwurfsmuster eingesetzt werden.[1] <br>
    Ziel des Musters ist ein flexibler Programmentwurf, der eine spätere Änderung oder Erweiterung erleichtert und eine Wiederverwendbarkeit der einzelnen Komponenten ermöglicht.<br>
    Es ist dann zum Beispiel möglich, eine Anwendung zu schreiben, die dasselbe Modell nutzt und es dann für Windows, Mac, Linux oder für das Internet zugänglich macht.<br>
    Die Umsetzungen nutzen dasselbe Modell, nur Controller und View müssen dabei jeweils neu implementiert werden.<br>
  <br>
    Das MVC-Konzept wurde 1979 zunächst für Benutzeroberflächen in Smalltalk durch Trygve Reenskaug beschrieben (Seeheim-Modell), der damals an Smalltalk im Xerox PARC arbeitete.<br>
    Es gilt mittlerweile aber als De-facto-Standard für den Grobentwurf vieler komplexer Softwaresysteme, teils mit Differenzierungen und oftmals mehreren jeweils nach dem MVC-Muster aufgeteilten Modulen.<br>
    </p>
    <img src="/assets/bild.jpg" alt="image">
  `,
  styles: [
  ]
})
export class ErklaerungMvcMvvmEtcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
