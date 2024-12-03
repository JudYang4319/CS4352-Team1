import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RewardsService } from '../../rewards/rewards.service';

interface Goal {
  name: string;
  contributionLabel: string;
  monthlyContribution: number;
  nextPaymentDue: Date;
  progress: number;
  isPaymentModalOpen: boolean;
  paymentAmount: number | null;
  totalCost: number;  // Total cost of the goal
}

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  submitPayment(goal: Goal): void {
    // Ensure payment amount is valid
    if (goal.paymentAmount !== null && goal.paymentAmount > 0) {
      if (goal.paymentAmount > goal.totalCost - goal.progress * (goal.totalCost / 100)) {
        alert("Payment amount cannot exceed the remaining cost of the goal.");
        return;
      }
      // Update the progress based on the payment amount
      const totalPaid = goal.progress * (goal.totalCost / 100);  // Calculate the current paid amount

      const newPaidAmount = totalPaid + goal.paymentAmount;

      // Calculate the new progress percentage
      const newProgress = Math.min((newPaidAmount / goal.totalCost) * 100, 100); // Ensure it doesn't exceed 100%

      // Update the progress bar and store it in localStorage

      goal.progress = newProgress;
      goal.paymentAmount = null; // Reset payment amount after submitting
      localStorage.setItem('userGoals', JSON.stringify(this.goals));
      goal.isPaymentModalOpen = false; // Save changes to localStorage
    } else {
      alert("Please enter a valid payment amount.");
    }
  }
  constructor(private router: Router, private rewardsService: RewardsService) { }

  addPaymentModal: Goal | null = null; // Ensure this starts as null
  goals = [
    {
      name: 'New York Trip',
      contributionLabel: 'Monthly Contribution',
      monthlyContribution: 100,
      nextPaymentDue: new Date('2024-12-01'), progress: 50,
      isPaymentModalOpen: false,
      paymentAmount: null,
      totalCost: 2000,
    },
    {
      name: 'Buying Mechanical Keyboard',
      contributionLabel: 'Monthly Contribution',
      monthlyContribution: 50,
      nextPaymentDue: new Date('2024-10-30'),
      progress: 75,
      isPaymentModalOpen: false,
      paymentAmount: null,
      totalCost: 200
    }
  ];

  isCreateGoalModalOpen: boolean = false;
  isPaymentModalOpen: boolean = false;
  goalTitle: string = '';
  totalCost: number | null = null;
  startDate: string = '';
  endDate: string = '';
  paymentSchedule: string = '';
  estimatedContribution: number | null = null;

  goalToAddPayment: number | null = null;
  paymentAmount: number | null = null;

  goalToRemove: number | null = null;

  ngOnInit(): void {
    const savedGoals = localStorage.getItem('userGoals');
    if (savedGoals) {
      this.goals = JSON.parse(savedGoals);
    }
    this.addPaymentModal = this.goals[0];
  }

  openCreateGoalModal(): void {
    this.isCreateGoalModalOpen = true;
  }

  goToOverview(): void {
    this.router.navigate(['/overview']);
  }

  currentDate: string = new Date().toISOString().split('T')[0];

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
    if (this.totalCost && this.startDate && this.endDate && this.paymentSchedule) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

      if (totalMonths <= 0) {
        this.estimatedContribution = null;
        return;
      }

      let totalPayments: number;
      switch (this.paymentSchedule) {
        case 'weekly':
          totalPayments = totalMonths * 4;
          break;
        case 'biweekly':
          totalPayments = totalMonths * 2;
          break;
        case 'monthly':
          totalPayments = totalMonths;
          break;
        default:
          totalPayments = totalMonths;
      }

      this.estimatedContribution = this.totalCost / totalPayments;
    } else {
      this.estimatedContribution = null;
    }
  }

  submitGoal(): void {
    if (this.totalCost !== null && this.totalCost < 0) {
      console.log("Total cost cannot be a negative number.");
      return;
    }

    if (!this.goalTitle || !this.totalCost || !this.startDate || !this.endDate || !this.paymentSchedule) {
      alert("Please fill out all the fields.");
      return;
    }

    this.calculateEstimatedContribution();

    if (this.estimatedContribution === null) {
      alert("Unable to calculate contribution. Check input values.");
      return;
    }

    const newGoal = {
      name: this.goalTitle,
      contributionLabel: this.getContributionLabel(this.paymentSchedule),
      monthlyContribution: this.estimatedContribution ?? 0,
      nextPaymentDue: this.calculateNextPaymentDate(),
      progress: 0,
      isPaymentModalOpen: false,  // Set the default state for the modal
      paymentAmount: null,
      totalCost: this.totalCost
    };

    this.goals.push(newGoal);
    localStorage.setItem('userGoals', JSON.stringify(this.goals));
    this.resetForm();
    this.closeCreateGoalModal();

    this.rewardsService.addPoints(100);
    alert('You earned 100 points!');
  }

  closeCreateGoalModal(): void {
    this.isCreateGoalModalOpen = false;
  }

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

  resetForm(): void {
    this.goalTitle = '';
    this.totalCost = null;
    this.startDate = '';
    this.endDate = '';
    this.paymentSchedule = '';
    this.estimatedContribution = null;
  }

  promptRemoveGoal(index: number): void {
    this.goalToRemove = index;
  }

  confirmRemoveGoal(index: number): void {
    this.goals.splice(index, 1);
    localStorage.setItem('userGoals', JSON.stringify(this.goals));
    this.goalToRemove = null;
  }

  cancelRemoveGoal(): void {
    this.goalToRemove = null;
  }

  openAddPaymentModal(goal: any): void {
    goal.isPaymentModalOpen = true;
  }

  closeAddPaymentModal(goal: any): void {
    goal.isPaymentModalOpen = false;
  }
  promptAddPayment(index: number): void {
    this.goalToAddPayment = index;
    this.paymentAmount = null;
  }

  confirmAddPayment(): void {
    if (this.goalToAddPayment !== null && this.paymentAmount !== null) {
      this.goals[this.goalToAddPayment].progress += this.paymentAmount;
      localStorage.setItem('userGoals', JSON.stringify(this.goals));
      this.goalToAddPayment = null;
      this.paymentAmount = null;
    }
  }

  cancelAddPayment(): void {
    this.goalToAddPayment = null;
    this.paymentAmount = null;
  }
}
