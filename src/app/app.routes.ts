import { Routes } from '@angular/router';

import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsComponent } from './news/news.component';
//import { DailyquestionComponent } from './components/dailyquestion/dailyquestion.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { GlossaryComponent } from './glossary/glossary.component';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { FriendProfileComponent } from './components/friend-profile/friend-profile.component';
import { GuildstartComponent } from './components/guildstart/guildstart.component';
import { FlagcreatorComponent } from './components/flagcreator/flagcreator.component';
import { CreateComponent } from './components/create/create.component';
import { GuildcreatedComponent } from './components/guildcreated/guildcreated.component';
import { ViewGuildComponent } from './components/viewguild/viewguild.component';
export const routes: Routes = [
  { path: 'goals', component: GoalsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'glossary', component: GlossaryComponent},
  { path: 'friends', component: FriendlistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'guildstart', component: GuildstartComponent },
  { path: 'create', component: CreateComponent },
  { path: 'flagcreator', component: FlagcreatorComponent },
  { path: 'guildcreated', component: GuildcreatedComponent },
  { path: 'viewguild', component: ViewGuildComponent },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  //{ path: 'dailyquestion', component: DailyquestionComponent, canActivate: [AuthGuard] },
  { path: 'friend-profile/:id', component: FriendProfileComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
  
  
  
];
