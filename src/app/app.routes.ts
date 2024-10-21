import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: '', component: GoalsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: '**', redirectTo: '' }
];
