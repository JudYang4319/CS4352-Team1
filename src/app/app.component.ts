import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverviewComponent],
  template: '<app-overview></app-overview>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'realcents';
}
