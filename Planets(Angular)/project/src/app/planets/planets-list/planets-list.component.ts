import { EventEmitter } from 'protractor';
import { Planet } from './../planet.module';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planets: Array<Planet> = [];
  p: number = 1;
  filterByName: string = "";
  itemsNumber: number = 10;
  itemsPerPage: any[];
  isLoading = false;
  id_regex = /\/(\d+)\/$/;

  constructor(private planetService: PlanetService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit() {

    this.fetchPlanets();

    this.itemsPerPage = [5, 10, 25, 100];
    this.isLoading = true;

  }

  fetchPlanets() {
    (this.planetService.fetchPlanets()).subscribe((data) => {
      this.planets = data["results"];
      this.fetchNextPage(data["next"]);
    });

  }

  fetchNextPage(next) {

    (this.planetService.fetchNextPlanets(next)).subscribe((data) => {
      this.planets = this.planets.concat(data["results"]);

      let currentNext = data["next"];
      if (currentNext !== null) {
        this.fetchNextPage(currentNext);
      }
      else {
        this.isLoading = false;
      }
    });

  }

  getPlanetId(url) {
    let found = url.match(this.id_regex);
    return found[1];
  }

  onChangeSelected(event) {
    this.p = 1;
  }
}
