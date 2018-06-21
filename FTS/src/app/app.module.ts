import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JustificantesComponent } from './components/justificantes/justificantes.component';

// appRoutes
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'justificantes', component: JustificantesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    JustificantesComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
