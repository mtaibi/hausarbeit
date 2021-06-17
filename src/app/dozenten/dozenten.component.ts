import { Component, OnInit } from '@angular/core';
import { Dozent } from '../dozent';
import { DozentService } from '../dozent.service';


@Component({
  selector: 'app-dozenten',
  templateUrl: './dozenten.component.html',
  styleUrls: ['./dozenten.component.css']
})
export class DozentenComponent implements OnInit {

  eingabe = false;
  dozenten: Dozent[]=[];
  selectedDozent?: Dozent;

  constructor(public dozentService: DozentService) { }

  ngOnInit(): void {
    this.getDozenten();
  }

  onSelect(dozent: Dozent): void {
    this.selectedDozent = dozent;
  }

  getDozenten(): void {
    this.dozentService.getDozenten()
        .subscribe(dozenten => this.dozenten = dozenten);
  }

  open(){
    //this.eingabe !=eingabe
  }

 /* newDozentForm(){
    return console.log("Hier kommt das Formular")
  }*/

}
