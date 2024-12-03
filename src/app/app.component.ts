import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FlagcreatorComponent } from './components/flagcreator/flagcreator.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { NewsComponent } from './news/news.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { GlossaryComponent } from './glossary/glossary.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateAccountComponent } from './components/createaccount/createaccount.component';

import { TransactionsComponent } from './components/transactions/transactions.component';
import { GuildstartComponent } from './components/guildstart/guildstart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverviewComponent, GoalsComponent, NewsComponent, SidebarComponent, GlossaryComponent, TransactionsComponent, SettingsComponent, CommonModule,  GuildstartComponent, FlagcreatorComponent, CreateAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'realcents';
  isSidebarOpen: boolean = false;
  isLoginPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login' || this.router.url === '/signup';
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  navigateToHome() {
    this.router.navigate(['/overview']);
  }
}
