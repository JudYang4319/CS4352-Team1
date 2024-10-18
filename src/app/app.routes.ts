import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: '**', redirectTo: '' }
];
