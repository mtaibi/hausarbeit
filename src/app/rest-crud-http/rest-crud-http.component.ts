import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-crud-http',
  template: `
  <p>Angular implementiert CRUD sowie HTTP-Schnittstellen. </p>
  <app-dozenten></app-dozenten>





  `,
  styles: [
  ],
})

export class RestCrudHttpComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
