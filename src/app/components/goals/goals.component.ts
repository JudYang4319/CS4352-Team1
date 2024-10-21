import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  goals = [
    { name: 'New York Trip', monthlyContribution: 100, nextPaymentDue: new Date('2024-12-01'), progress: 50 },
    { name: 'Buying Mechanical Keyboard', monthlyContribution: 50, nextPaymentDue: new Date('2024-10-30'), progress: 75 }
    // Add more goals as needed
  ];
}
