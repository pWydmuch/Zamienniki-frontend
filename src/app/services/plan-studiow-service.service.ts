import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PlanInfo } from '../models/PlanInfo';

@Injectable({
  providedIn: 'root'
})
export class PlanStudiowService {
  private basicUrl = `${environment.basicUrl}`;
  constructor(private http: HttpClient) { }

  getPlanInfo(): Observable<PlanInfo>{
    return this.http.get<PlanInfo>(`${this.basicUrl}/plany/info`)
    .pipe(
      tap(_ => console.log('fetched cykle'))
      // catchError(this.handleError<Hero[]>('getHeroes', [])
    );
  }

}
