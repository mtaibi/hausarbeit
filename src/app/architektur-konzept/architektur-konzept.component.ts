import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-architektur-konzept',
  template: `
    <p>
      architektur-konzept works!
      <app-dozent-detail></app-dozent-detail>
    </p>
  `,
  styles: [
  ]
})
export class ArchitekturKonzeptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
