import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private router: Router) {} // Inject Router

  toggleSidebar() {
    this.closeSidebar.emit();
  }

  navigateToOverview() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/overview']); // Navigate to the overview component
  }
}