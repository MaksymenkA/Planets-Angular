import { Pipe, PipeTransform } from "@angular/core";
import { Planet } from '../planet.module';

@Pipe({
  name: 'searchByPlanetsName'
})
export class PlanetsNameFilterPipe implements PipeTransform {
  transform(planets: Planet[], filterByPlanetsName: string) {
    if (!planets || !filterByPlanetsName) {
      return planets;
    }
    return planets.filter(planet => planet.name.toLowerCase()
      .indexOf(filterByPlanetsName.toLowerCase()) !== -1);
  }
}
