import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetsDetailComponent } from './planets/planets-detail/planets-detail.component';
import { PlanetsComponent } from './planets/planets.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'details/:id', component: PlanetsDetailComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
