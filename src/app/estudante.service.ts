import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  getEstudantes(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.url);
  }

  save(estudante: Estudante): Observable<Estudante>{
    return this.http.post<Estudante>(this.url, estudante);
  }

  update(estudante: Estudante): Observable<Estudante>{
    return this.http.put<Estudante>(`${this.url}/${estudante.id}`, estudante);
  }

  delete(estudante: Estudante): Observable<void>{
    return this.http.delete<void>(`${this.url}/${estudante.id}`);
  }
}
