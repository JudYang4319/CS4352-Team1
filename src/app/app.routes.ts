import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './components/login/login.component';

import { GlossaryComponent } from './glossary/glossary.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { FriendProfileComponent } from './components/friend-profile/friend-profile.component';
import { GuildstartComponent } from './components/guildstart/guildstart.component';
import { FlagcreatorComponent } from './components/flagcreator/flagcreator.component';
import { CreateComponent } from './components/create/create.component';
import { GuildcreatedComponent } from './components/guildcreated/guildcreated.component';
import { ViewGuildComponent } from './components/viewguild/viewguild.component';
import { DebtRepaymentComponent } from './debt-repayment/debt-repayment.component';
import { CreateAccountComponent } from './components/createaccount/createaccount.component';
import { MyFriendsComponent } from './components/myfriends/myfriends.component';


export const routes: Routes = [
  { path: 'goals', component: GoalsComponent, data: { title: 'Goals' } },
  { path: 'news', component: NewsComponent, data: { title: 'News' } },
  { path: 'overview', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'sidebar', component: SidebarComponent, data: { title: 'Sidebar' } },
  { path: 'glossary', component: GlossaryComponent, data: { title: 'Glossary' } },
  { path: 'debt-repayment', component: DebtRepaymentComponent, data: { title: 'Debt Repayment' } },
  { path: 'profile', component: SettingsComponent, data: { title: 'Profile' } },
  { path: 'transactions', component: TransactionsComponent, data: { title: 'Transactions' } },
  { path: 'friends', component: FriendlistComponent, data: { title: 'Friend Find' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'guildstart', component: GuildstartComponent, data: { title: 'Guild Start' } },
  { path: 'create', component: CreateComponent, data: { title: 'Create' } },
  { path: 'flagcreator', component: FlagcreatorComponent, data: { title: 'Flag Creator' } },
  { path: 'guildcreated', component: GuildcreatedComponent, data: { title: 'Guild Created' } },
  { path: 'createaccount', component: CreateAccountComponent, data: { title: 'Create Account' } },
  { path: 'myfriends', component: MyFriendsComponent, data: { title: 'My Friends' }  },
  { path: 'viewguild', component: ViewGuildComponent, data: { title: 'View Guild' } },
  { path: 'friend-profile/:id', component: FriendProfileComponent, data: { title: 'Friend Profile' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];