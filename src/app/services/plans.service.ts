import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private plans: CustomPlan[] = [];

  addPlan(plan: CustomPlan)
  {
    this.plans.push(plan);
  }

  getPlans()
  {
    return this.plans;
  }
}
