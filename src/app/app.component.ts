import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hausarbeit - strategische IT-Entwicklung & Trends';
  title2 = 'Datenbindung und Datenhaltung mit Angular';
  student = 'Student: Murad Taibi';
  matrikelnummer = 'Matrikelnummer: 490215';
  dozent = 'Dozent: Prof. Dr. Klaus Wilderotter';
  opened = false;

  log(state){
    console.log(state)
  }


}
