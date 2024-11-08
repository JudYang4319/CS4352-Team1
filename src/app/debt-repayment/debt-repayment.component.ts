import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class CustomPlan {
  monthlyPayment: number;
  expectedBonus: number;
  category: string;
  limit: number;
  amount: number;
  deadline: Date;
  occurrence: string;

  constructor(
    monthlyPayment: number,
    expectedBonus: number,
    category: string,
    limit: number,
    amount: number,
    deadline: Date,
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
  styleUrl: './debt-repayment.component.css'
})
export class DebtRepaymentComponent {
  currentTab: string = "Home";
  homeTab = "Home";
  createPlanTab = "Create Plan";
  viewPlansTab = "View Plans";
  customTab = "Custom";
  moreDetailsTab: string = "More Details";
  milestoneReminder: string = "Milestone/Reminder"

  monthlyPayment: number = 0;
  expectedBonus: number = 0;
  category: string = "";
  limit: number = 0;
  amount: number = 0;
  deadline: Date = new Date;
  occurrence: string = "";

  customPlans: CustomPlan[] = [];
  

  ngOnInit(): void {
    // Initialization logic if needed
  }

  createPlanClick() {
    this.currentTab = this.createPlanTab;
  }

  viewPlans() {
    this.currentTab = this.viewPlansTab;
  }

  backToStart() {
    this.currentTab = this.homeTab;
  }

  customClick() {
    this.currentTab = this.customTab;
  }

  snowballClick() {
    this.currentTab = this.homeTab;
  }

  avalancheClick() {
    this.currentTab = this.homeTab;
  }

  customToSelect() {
    this.currentTab = this.createPlanTab;
    this.monthlyPayment = 0;
    this.expectedBonus = 0;
  }

  moreDetailsClick() {
    this.currentTab = this.moreDetailsTab;
  }

  moreDetailsToCustom()
  {
    this.currentTab = this.customTab;
    this.category = "";
    this.limit = 0;
  }

  setMilestoneReminder()
  {
    this.currentTab = this.milestoneReminder;
  }

  milestoneToDetails()
  {
    this.deadline = new Date;
    this.occurrence = "";
    this.amount = 0;
    this.currentTab = this.moreDetailsTab;
  }

  savePlan()
  {
    const plan = new CustomPlan(
      this.monthlyPayment,
      this.expectedBonus,
      this.category,
      this.limit,
      this.amount,
      this.deadline,
      this.occurrence
    );
    
    this.customPlans.push(plan);
    this.monthlyPayment = 0;
    this.expectedBonus = 0;
    this.category = "";
    this.limit = 0;
    this.amount = 0;
    this.deadline = new Date;
    this.occurrence = "";
    this.currentTab = this.viewPlansTab;
  }

}
