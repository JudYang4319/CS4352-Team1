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

  constructor(private router: Router) { } // Inject Router

  toggleSidebar() {
    this.closeSidebar.emit();
  }

  navigateToOverview() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/overview']); // Navigate to the overview component
  }
  navigateToGoals() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/goals']); // Navigate to the goals component
  }

  navigateToNews() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/news']); // Navigate to the news component
  }

  navigateToGlossary() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/glossary']); // Navigate to the glossary component
  }
}