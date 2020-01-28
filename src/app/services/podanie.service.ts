import { Injectable } from '@angular/core';
import { Kurs } from '../models/Kurs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';
import { Podanie } from '../models/Podanie';


@Injectable({
  providedIn: 'root'
})
export class PodanieService {

  private podaniaUrl = 'https://zamienniki.herokuapp.com/podania';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPodania(): Observable<Podanie[]>{
    return this.http.get<Podanie[]>(this.podaniaUrl)
    .pipe(
      tap(_ => console.log('fetched podania'))
      // catchError(this.handleError<Hero[]>('getHeroes', [])
    );
  }

  getPodanie(id: number): Observable<Podanie> {
    const url = `${this.podaniaUrl}/${id}`;
    return this.http.get<Podanie>(url).pipe(
      tap(_ => console.log(`fetched podanie id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  updatePodanie(podanie: Podanie): Observable<any> {
    return this.http.put(`${this.podaniaUrl}/${podanie.id}`, podanie, this.httpOptions).pipe(
      tap(_ => console.log(`updated heroid=${podanie.id}`)),
      // catchError(this.handleError<any>(`updateHero`))
    );
  }

}
