import { Component, NgModule, OnInit } from '@angular/core';
import { Dozent } from '../dozent';
import { DozentService } from '../dozent.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dozenten',
  templateUrl: './dozenten.component.html',
  styleUrls: ['./dozenten.component.css']
})
export class DozentenComponent implements OnInit {

  dozenten: Dozent[]=[];
  selectedDozent?: Dozent;
  newDozent: Dozent;




  constructor(private dozentService: DozentService) {
    this.selectedDozent = this.newDozent
  }

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

  createDozent(): void{
    this.dozentService.create(this.newDozent);
  }
}
