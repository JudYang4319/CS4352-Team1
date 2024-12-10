import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FlagService } from '../services/flag.service';

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

  constructor(private router: Router, private flagService: FlagService) {
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
  navigateToGuildStart() {
    this.toggleSidebar(); // Close the sidebar
    this.router.navigate(['/guildstart']); // Navigate to the guild start component
  }
  navigateToViewGuild() {
    this.toggleSidebar(); // Close the sidebar
    if (this.flagService.getGuildName()) {
      this.router.navigate(['/viewguild']); // Navigate to the view guild component
    } else {
      alert('Please join or create a guild first.');
    }
  }
  navigateToMyFriends(){
    this.toggleSidebar();
    this.router.navigate(['/myfriends']);
  }

  // Host Listener to detect clicks outside the sidebar
  @HostListener('document:click', ['$event']) 
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const sidebarElement = document.querySelector('.sdenav');

    // Check if tapping occurs outside the sidebar and it's open
    if(this.isOpen && sidebarElement && !sidebarElement.contains(target)) {
      this.closeSidebar.emit(); // Closses the sidebar if it's tapped outside
    }
  }
}

