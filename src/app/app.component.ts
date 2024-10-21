import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { GoalsComponent } from './components/goals/goals.component';
import { NewsComponent } from './news/news.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverviewComponent, GoalsComponent, NewsComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'realcents';
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
