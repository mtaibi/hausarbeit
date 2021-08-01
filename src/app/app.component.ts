import { Component } from '@angular/core';
import { DozentService } from './dozent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hausarbeit - strategische IT-Entwicklung & Trends';
  title2 = 'Datenbindung und Datenhaltung mit Angular';
  opened = false;

  log(state){
    console.log(state)
  }


}
