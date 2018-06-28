import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

//Routes
import {Routes, RouterModule} from '@angular/router'

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JustificantesComponent } from './components/justificantes/justificantes.component';
import { HeaderComponent } from './components/header/header.component';

//Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment'

//Services
import { justificanteService } from './services/justificante.service';
import { JustificantesListComponent } from './components/justificantes/justificantes-list/justificantes-list.component';

// appRoutes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'justificantes', component: JustificantesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    JustificantesComponent, HeaderComponent, JustificantesListComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    justificanteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
