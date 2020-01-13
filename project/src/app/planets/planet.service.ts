import { Observable, BehaviorSubject } from 'rxjs';
import { Planet } from './planet.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { publishReplay, refCount } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  public baseURL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {

  }

  public fetchPlanets() {
    return this.http.get<Planet[]>(`${this.baseURL}planets`).pipe(publishReplay(1), refCount());
  }

  public fetchNextPlanets(url: string) {
    return this.http.get<Planet[]>(url).pipe(publishReplay(1), refCount());
  }

  public fetchFilmsAndResidentsOfSpecificPlanet(urls: any[]) {
    let httpRequests: any[] = [];
    urls.forEach(url => {
      httpRequests.push(this.http.get(url));
    });
    return httpRequests;
  }

  public searchPlanetById(id: string) {
    return this.http.get<Planet>(`${this.baseURL}planets/${id}/`).pipe(publishReplay(1), refCount());

  }

}
