import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-einleitung',
  template: `
    <p>
    Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.<br>
    These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises.<br>
     Tutorials and guides include downloadable examples to accelerate your projects.
    </p>
    <img src="/assets/Logo.jpg">
  `,
  styles: [
  ]
})
export class EinleitungComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
