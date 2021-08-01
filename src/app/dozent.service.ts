import { Injectable } from '@angular/core';
import { Dozent } from './dozent';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DozentService {

  list: BehaviorSubject<Dozent[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {

  }
  getDozenten(): Observable<Dozent[]>{
    return this.http.get<Dozent[]>(environment.dozentEndpoint)
      .pipe(
        tap(dozenten => this.list.next(dozenten))
      );
  }

  getDozentenByName(name: string): Dozent | undefined {
    return this.list.getValue().find (value => {
      return `${value.vorname} ${value.nachname}` === name;
    })
  }

  getDozentenById(id: number): Observable<Dozent> {
    return this.http.get<Dozent>(`${environment.dozentEndpoint}/${id}`)
  }

  create (dozent: Dozent): Observable<Dozent> {
    return this.http.post<Dozent>(environment.dozentEndpoint, dozent)
    .pipe(
      tap (createdDoz => this.getDozenten().subscribe() )
    );
  }
}
