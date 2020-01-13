import { PlanetService } from './../planet.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Planet } from '../planet.module';
import { forkJoin, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss']
})
export class PlanetsDetailComponent implements OnInit {


  id: string;
  planet: Planet;

  residentUrls: any[] = [];
  filmUrls: any[] = [];

  films: any[] = [];
  residents: any[] = [];

  isLoading = false;

  constructor(private route: ActivatedRoute, private planetService: PlanetService) {

  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);

      });

    this.searchByPlanetId();
    this.isLoading = true;

  }

  searchByPlanetId() {

    this.planetService.searchPlanetById(this.id).pipe(take(1)).subscribe((planet) => {
      this.isLoading = false;

      this.planet = planet;

      this.filmUrls = this.planet["films"];
      this.residentUrls = this.planet["residents"];

      this.fetchNames(this.residentUrls, this.residents, "name");
      this.fetchNames(this.filmUrls, this.films, "title");

    });

  }

  fetchNames(urls, arrayOfNames, param) {
    forkJoin(this.planetService.fetchFilmsAndResidentsOfSpecificPlanet(urls)
    ).subscribe(results => {
      results.forEach(result => {
        arrayOfNames.push(result[param]);
      });
    });

  }

}
