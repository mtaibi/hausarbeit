import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studenten',
  templateUrl: './studenten.component.html',
  styleUrls: ['./studenten.component.css']
})
export class StudentenComponent implements OnInit {

  student: Student = {
    id: 1,
    vorname: 'Murad',
    nachname: 'Taibi',
    matrikelnummer: 490215
  };

  constructor() { }

  ngOnInit(): void {
  }

}
