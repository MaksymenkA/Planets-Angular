import { PlanetsDetailComponent } from './planets/planets-detail/planets-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetsNameFilterPipe } from './planets/pipes/planets-name-filter.pipe';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetsListComponent,
    PlanetsNameFilterPipe,
    PlanetsDetailComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
