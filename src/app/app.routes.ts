import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsComponent } from './news/news.component';
import { GlossaryComponent } from './glossary/glossary.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'glossary', component: GlossaryComponent},
  { path: '**', redirectTo: '' }
];
