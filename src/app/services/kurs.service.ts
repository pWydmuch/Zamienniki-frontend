import { Injectable } from '@angular/core';
import { Kurs } from '../model/Kurs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class KursService {

  private basicUrl = 'http://localhost:8080';
  private params : {};

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getKursy(): Observable<Kurs[]>{
    return this.http.get<Kurs[]>(`${this.basicUrl}/kursy`)
    .pipe(
      tap(_ => console.log('fetched kursy'))
      // catchError(this.handleError<Hero[]>('getHeroes', [])
    );
  }

  getKurs(id: number): Observable<Kurs> {
    const url = `${this.basicUrl}/kursy/${id}`;
    return this.http.get<Kurs>(url).pipe(
      tap(_ => console.log(`fetched kurs id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getCykle(): Observable<string[]>{
    return this.http.get<string[]>(`${this.basicUrl}/cykle`)
    .pipe(
      tap(_ => console.log('fetched cykle'))
      // catchError(this.handleError<Hero[]>('getHeroes', [])
    );
  }

  getKierunki(): Observable<string[]>{
    return this.http.get<string[]>(`${this.basicUrl}/kierunki`)
    .pipe(
      tap(_ => console.log('fetched kierunki'))
      // catchError(this.handleError<Hero[]>('getHeroes', [])
    );
  }
  findKursy(kurs: Kurs): Observable<any> {
    console.log(kurs);
    // this.addParams(kurs);
    // console.log(this.params);
    return this.http.get(`${this.basicUrl}/kursy`,
     {
        params: kurs
    }).pipe(
      tap(_ => console.log(`find kursy`)),
      // catchError(this.handleError<any>(`updateHero`))
    );
  }

}


