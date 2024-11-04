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
  isLoginPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login' || this.router.url === '/signup'; // Check for both login and signup
    });
  }

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

  navigateToDebtRepayment() {
    this.toggleSidebar();
    this.router.navigate(['/debt-repayment']);
  }

  navigateToSettings() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/profile']); // Navigate to the settings component
  }

  navigateToTransactions() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/transactions']); // Navigate to the transactions component
  }

  navigateToFriends() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/friends']); // Navigate to the glossary component
  }
}
