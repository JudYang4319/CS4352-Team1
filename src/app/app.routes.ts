import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: '**', redirectTo: '' }
];
