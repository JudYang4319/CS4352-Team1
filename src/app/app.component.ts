import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { GlossaryComponent } from './glossary/glossary.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateAccountComponent } from './components/createaccount/createaccount.component';

import { TransactionsComponent } from './components/transactions/transactions.component';
import { GuildstartComponent } from './components/guildstart/guildstart.component';
import { filter, map, mergeMap } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverviewComponent, GoalsComponent, NewsComponent, SidebarComponent, GlossaryComponent, TransactionsComponent, SettingsComponent, CommonModule, GuildstartComponent, FlagcreatorComponent, CreateAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'realcents';
  isSidebarOpen: boolean = false;
  isLoginPage: boolean = false;

  pageTitle: string = "Overview";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login' || this.router.url === '/signup';
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data) // Get `data` from route configuration
      )
      .subscribe((data) => {
        this.pageTitle = data['title'] || 'Default Title';
      });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  navigateToHome() {
    this.router.navigate(['/overview']);
  }
}
