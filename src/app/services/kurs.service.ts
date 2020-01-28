import { Injectable } from '@angular/core';
import { Kurs } from '../models/Kurs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class KursService {

  private basicUrl = environment.basicUrl;
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


  findKursy(kurs: Kurs): Observable<any> {
    let kr:any = kurs;
    console.log(kurs);
    return this.http.get(`${this.basicUrl}/kursy`,
     {
        params: kr
    }).pipe(
      tap(_ => console.log(`find kursy`)),
      // catchError(this.handleError<any>(`updateHero`))
    );
  }

}


