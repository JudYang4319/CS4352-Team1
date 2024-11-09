import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guildcreated',
  standalone: true,
  imports: [],
  templateUrl: './guildcreated.component.html',
  styleUrl: './guildcreated.component.css'
})
export class GuildcreatedComponent {
  constructor(private router: Router) {}

  goToOverview() {
    this.router.navigate(['/overview']);
  }
  viewGuild() {
    this.router.navigate(['/viewguild']);
  }
  editGuildSettings() {
    this.router.navigate(['/flagcreator']);
  }
  inviteFriends() {
    this.router.navigate(['/friends']);
  }
}
