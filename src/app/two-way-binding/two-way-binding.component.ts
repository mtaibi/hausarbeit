import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input [(ngModel)]="name"  type="text">
    <img src="/assets/twoWayBinding.jpg" alt="Two-Way-Binding">
    {{name}}
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  public name="";

  constructor() { }

  ngOnInit(): void {
  }

}
