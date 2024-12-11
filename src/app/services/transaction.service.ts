import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private expenses: { type: string, amount: number, category: string }[] = [
    { type: 'Expense', amount: 1000, category: "Rent"},
    { type: 'Expense', amount: 400, category: "Student Loans"},
    { type: 'Expense', amount: 100, category: "Food"},
    { type: 'Expense', amount: 50, category: "Entertainment"},
    { type: 'Income', amount: 2000, category: 'Job'}
  ];

  addExpense(addAmount: number, addCategory: string) {
    const lowercasedCategory = addCategory.toLowerCase();
    const existingExpense = this.expenses.find(expense => expense.category.toLowerCase() === lowercasedCategory && expense.type === 'Expense');
    
    if (existingExpense) {
      existingExpense.amount += addAmount;
    } else {
      this.expenses.push({ type: 'Expense', amount: addAmount, category: addCategory });
    }
  }

  addIncome(addAmount: number, addCategory: string) {
    this.expenses.push({ type: 'Income', amount: addAmount, category: addCategory });
  }

  getAllExpenses() {
    return [...this.expenses];
  }
}
