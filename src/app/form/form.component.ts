import { Component, OnInit } from '@angular/core';
import { Dozent } from '../dozent';
import { DozentService } from '../dozent.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newDozent: Dozent[];
  dozenten: Dozent[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
