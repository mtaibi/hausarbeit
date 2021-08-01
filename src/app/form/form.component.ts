import { Component, OnInit } from '@angular/core';
import { Dozent } from '../dozent';
import { FormsModule } from '@angular/forms';
import { DozentService } from '../dozent.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dozentModel = new Dozent();
  dozenten: Dozent[]=[];
  selectedDozent?: Dozent;
  newDozent: Dozent;

  constructor(private dozentService: DozentService) {}

  ngOnInit(): void {
    this.dozentService.getDozenten();
  }

  onSubmit(){
    this.dozentService.create(this.dozentModel)
    .subscribe(
      data => console.log("success", data)
    )
    this.dozentService.getDozenten();
  }
}
