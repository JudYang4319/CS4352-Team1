import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RewardsService } from '../rewards/rewards.service';

class CustomPlan {
  monthlyPayment: number;
  expectedBonus: number;
  category: string;
  limit: number;
  amount: number;
  deadline: Date | null;
  occurrence: string;

  constructor(
    monthlyPayment: number,
    expectedBonus: number,
    category: string,
    limit: number,
    amount: number,
    deadline: Date | null,
    occurrence: string
  ) {
    this.monthlyPayment = monthlyPayment;
    this.expectedBonus = expectedBonus;
    this.category = category;
    this.limit = limit;
    this.amount = amount;
    this.deadline = deadline;
    this.occurrence = occurrence;
  }
}

@Component({
  selector: 'app-debt-repayment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './debt-repayment.component.html',
  styleUrls: ['./debt-repayment.component.css']
})
export class DebtRepaymentComponent {
  // Tab management
  currentTab: string = 'homeTab';
  homeTab: string = 'homeTab';
  createPlanTab: string = 'createPlanTab';
  formTab: string = 'formTab';
  plansTab: string = 'plansTab';

  // Plan selection
  selectedPlan: string = '';
  
  // Form fields
  monthlyPayment: number = 200;
  expectedBonus: number = 1000;
  category: string = "Loan Payment";
  customCategory: string = "";
  limit: number = 5000;
  amount: number = 0;
  deadline: Date | null = null;
  occurrence: string = "";
  customPlans: CustomPlan[] = [];
  categories = [
    'Food',
    'Entertainment',
    'Rent',
    'Loan Payment',
    'Transportation',
    'Utilities',
    'Insurance',
    'Healthcare',
    'Supplies',
    'Education'
  ];
  isCustomCategory: boolean = false;
  minDate: string;

  constructor(private rewardsService: RewardsService) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  // Tab navigation methods
  viewPlans(): void {
    this.currentTab = this.createPlanTab;
  }

  createPlanClick(): void {
    this.currentTab = this.formTab;
  }

  customClick(planType: string): void {
    this.selectedPlan = planType;
    this.currentTab = this.formTab;
  }

  backToStart(): void {
    this.currentTab = this.homeTab;
  }

  onCategoryChange() {
    this.isCustomCategory = this.category === 'Custom';
  }

  submitPlan(): void {
    // Validate that all required fields are filled
    if (!this.monthlyPayment || this.monthlyPayment < 0) {
        console.log("Invalid monthly payment.");
        alert("Please enter a valid monthly payment.");
        return;
    }

    if (!this.expectedBonus || this.expectedBonus < 0) {
        console.log("Invalid expected bonus.");
        alert("Please enter a valid expected bonus.");
        return;
    }

    if (!this.category && !this.customCategory) {
        console.log("Category is required.");
        alert("Please select or enter a category.");
        return;
    }

    if (!this.limit || this.limit < 0) {
        console.log("Invalid limit.");
        alert("Please enter a valid limit.");
        return;
    }

    if (!this.amount || this.amount < 0) {
        console.log("Invalid amount.");
        alert("Please enter a valid Milestone amount.");
        return;
    }

    if (!this.deadline) {
        console.log("Deadline is required.");
        alert("Please select a Milestone deadline.");
        return;
    }

    if (!this.occurrence) {
        console.log("Occurrence is required.");
        alert("Please select a reminder occurrence for your Milestone.");
        return;
    }

    // Proceed with creating the plan if all validations pass
    const plan = new CustomPlan(
        this.monthlyPayment,
        this.expectedBonus,
        this.isCustomCategory ? this.customCategory : this.category,
        this.limit,
        this.amount,
        this.deadline,
        this.occurrence
    );

    this.customPlans.push(plan);
    this.resetForm();
    this.rewardsService.addPoints(100);
    alert('Plan saved. You earned 100 points!');
    
    this.currentTab = this.plansTab;
  }

  resetForm(): void {
    this.monthlyPayment = 200;
    this.expectedBonus = 1000;
    this.category = "Loan Payment";
    this.customCategory = "";
    this.limit = 5000;
    this.amount = 0;
    this.deadline = null;
    this.occurrence = "";
  }
}
