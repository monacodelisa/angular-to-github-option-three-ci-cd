import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AboutAngularComponent } from './components/about-angular/about-angular.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about-angular', component: AboutAngularComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
