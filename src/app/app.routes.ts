import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { GlossaryComponent } from './glossary/glossary.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

import { DebtRepaymentComponent } from './debt-repayment/debt-repayment.component';

export const routes: Routes = [
  { path: 'goals', component: GoalsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'debt-repayment', component: DebtRepaymentComponent },
  { path: 'profile', component: SettingsComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'transactions', component: TransactionsComponent }, // Correct route

  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
