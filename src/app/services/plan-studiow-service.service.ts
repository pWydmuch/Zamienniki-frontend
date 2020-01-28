import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanStudiowService {
  private basicUrl = `${environment.basicUrl}`;
  constructor(private http: HttpClient) { }

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
}
