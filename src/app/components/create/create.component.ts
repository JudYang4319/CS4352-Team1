import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/overview']);
  }
  goToCustomize() {
    this.router.navigate(['/flagcreator']);
  }
  saveGuild() {
    this.router.navigate(['/overview']);
  }

}
