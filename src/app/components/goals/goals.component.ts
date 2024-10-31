import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  goals = [
    { name: 'New York Trip', contributionLabel: 'Monthly Contribution', monthlyContribution: 100, nextPaymentDue: new Date('2024-12-01'), progress: 50 },
    { name: 'Buying Mechanical Keyboard', contributionLabel: 'Monthly Contribution', monthlyContribution: 50, nextPaymentDue: new Date('2024-10-30'), progress: 75 }
  ];

  isCreateGoalModalOpen: boolean = false;
  goalTitle: string = '';
  totalCost: number | null = null;
  startDate: string = '';
  endDate: string = '';
  paymentSchedule: string = ''; // Empty default to match the "Select Payment Plan" option
  estimatedContribution: number | null = null;


  // Function to open the modal
  openCreateGoalModal(): void {
    this.isCreateGoalModalOpen = true;
  }


  getContributionLabel(paymentSchedule: string): string {
    switch (paymentSchedule) {
      case 'weekly':
        return 'Weekly Contribution';
      case 'biweekly':
        return 'Biweekly Contribution';
      case 'monthly':
        return 'Monthly Contribution';
      default:
        return 'Contribution';
    }
  }

  calculateEstimatedContribution(): void {
    console.log('Calculating Estimated Contribution...');
    console.log('Total Cost:', this.totalCost);
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    console.log('Payment Schedule:', this.paymentSchedule);

    if (this.totalCost && this.startDate && this.endDate && this.paymentSchedule) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      // Calculate the total months between start and end dates
      const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      console.log('Total Months:', totalMonths);

      if (totalMonths <= 0) {
        this.estimatedContribution = null;
        return;
      }

      let totalPayments: number;

      // Determine number of payments based on the schedule
      switch (this.paymentSchedule) {
        case 'weekly':
          totalPayments = totalMonths * 4; // Assume 4 weeks per month
          break;
        case 'biweekly':
          totalPayments = totalMonths * 2; // Assume 2 biweekly periods per month
          break;
        case 'monthly':
          totalPayments = totalMonths;
          break;
        default:
          totalPayments = totalMonths;
      }

      // Calculate estimated contribution per payment period
      this.estimatedContribution = this.totalCost / totalPayments;
    } else {
      this.estimatedContribution = null;
    }
  }


  submitGoal(): void {
    console.log('Submitting Goal...');
    console.log('Goal Title:', this.goalTitle);
    console.log('Total Cost:', this.totalCost);
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    console.log('Payment Schedule:', this.paymentSchedule);

    // Check if all fields are properly filled out
    if (!this.goalTitle || !this.totalCost || !this.startDate || !this.endDate || !this.paymentSchedule) {
      console.log("Please fill out all the fields.");
      return; // Exit if the form is not complete
    }

    // Calculate estimated contribution
    this.calculateEstimatedContribution();

    if (this.estimatedContribution === null) {
      console.log("Unable to calculate contribution. Check input values.");
      return;
    }

    // Prepare the new goal object
    const newGoal = {
      name: this.goalTitle,
      contributionLabel: this.getContributionLabel(this.paymentSchedule),
      monthlyContribution: this.estimatedContribution ?? 0, // Ensure a valid number is set
      nextPaymentDue: this.calculateNextPaymentDate(),
      progress: 0 // Default progress
    };

    // Log the new goal object
    console.log('New Goal:', newGoal);

    // Add the new goal to the goals list
    this.goals.push(newGoal);

    // Reset the form and close the modal
    this.resetForm();
    this.closeCreateGoalModal();
    console.log("Goal submitted and modal closed.");
  }

  closeCreateGoalModal(): void {
    console.log("Closing Create Goal Modal");
    this.isCreateGoalModalOpen = false;
  }



  // Helper method to calculate the next payment due date (assuming a simple logic for demonstration)
  calculateNextPaymentDate(): Date {
    const start = new Date(this.startDate);
    switch (this.paymentSchedule) {
      case 'weekly':
        return new Date(start.setDate(start.getDate() + 7));
      case 'biweekly':
        return new Date(start.setDate(start.getDate() + 14));
      case 'monthly':
        return new Date(start.setMonth(start.getMonth() + 1));
      default:
        return start;
    }
  }

  // Helper method to reset the form fields after submission
  resetForm(): void {
    this.goalTitle = '';
    this.totalCost = null;
    this.startDate = '';
    this.endDate = '';
    this.paymentSchedule = '';
    this.estimatedContribution = null;
  }

}
