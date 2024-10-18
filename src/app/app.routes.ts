import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: '', component: SidebarComponent },
  { path: '**', redirectTo: '' }
];
