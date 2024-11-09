import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guildstart',
  standalone: true,
  imports: [],
  templateUrl: './guildstart.component.html',
  styleUrl: './guildstart.component.css'
})
export class GuildstartComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/overview']);
  }
  goToCreate() {
    this.router.navigate(['/create']);
  }
}


