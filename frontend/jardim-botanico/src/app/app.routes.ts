import { Routes } from '@angular/router';
import { GraxaimComponent } from './graxaim/graxaim.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'graxaim', component: GraxaimComponent },
  { path: '', component: HomeComponent },
]
