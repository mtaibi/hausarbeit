import { Component, OnInit } from '@angular/core';
import { Dozent } from '../dozent';

@Component({
  selector: 'app-dozenten',
  templateUrl: './dozenten.component.html',
  styleUrls: ['./dozenten.component.css']
})
export class DozentenComponent implements OnInit {


  dozent: Dozent = {
    id: 1,
    vorname: "Max",
    nachname: "Mustermann"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
