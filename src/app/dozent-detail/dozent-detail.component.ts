import { Component, OnInit, Input } from '@angular/core';
import { Dozent } from '../dozent'

@Component({
  selector: 'app-dozent-detail',
  templateUrl: './dozent-detail.component.html',
  styleUrls: ['./dozent-detail.component.css']
})


export class DozentDetailComponent implements OnInit {

  @Input() dozent?: Dozent;

  constructor() {}

  ngOnInit(): void {
  }


}
