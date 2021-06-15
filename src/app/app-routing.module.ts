import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ArchitekturKonzeptComponent } from './architektur-konzept/architektur-konzept.component';
import { DatenbindungComponent } from './datenbindung/datenbindung.component';
import { DatenbindungenTypenComponent } from './datenbindungen-typen/datenbindungen-typen.component';
import { DatenhaltungComponent } from './datenhaltung/datenhaltung.component';
import { EinleitungComponent } from './einleitung/einleitung.component';
import { MethodikArtefaktDesignScienceResearchComponent } from './methodik-artefakt-design-science-research/methodik-artefakt-design-science-research.component';
import { FazitComponent } from './fazit/fazit.component';
import { ForschungsfrageComponent } from './forschungsfrage/forschungsfrage.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { RestCrudHttpComponent } from './rest-crud-http/rest-crud-http.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ErklaerungMvcMvvmEtcComponent } from './erklaerung-mvc-mvvm-etc/erklaerung-mvc-mvvm-etc.component';

const routes: Routes = [
  {path: 'einleitung', component: EinleitungComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'architektur-konzept', component: ArchitekturKonzeptComponent},
  {path: 'datenbindung', component: DatenbindungComponent},
  {path: 'datenbindungen-typen', component: DatenbindungenTypenComponent},
  {path: 'datenhaltung', component: DatenhaltungComponent},
  {path: 'methodik-artefakt-design-science-research', component: MethodikArtefaktDesignScienceResearchComponent},
  {path: 'fazit', component: FazitComponent},
  {path: 'forschungsfrage', component: ForschungsfrageComponent},
  {path: 'one-way-binding', component: OneWayBindingComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent},
  {path: 'rest-crud-http', component: RestCrudHttpComponent},
  {path: 'erklaerung-mvc-mvvm-etc', component: ErklaerungMvcMvvmEtcComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  EinleitungComponent,
  AngularComponent,
  ArchitekturKonzeptComponent,
  DatenbindungComponent,
  DatenbindungenTypenComponent,
  DatenhaltungComponent,
  MethodikArtefaktDesignScienceResearchComponent,
  FazitComponent,
  ForschungsfrageComponent,
  OneWayBindingComponent,
  TwoWayBindingComponent,
  RestCrudHttpComponent
]
