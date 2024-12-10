import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private expenses: { amount: number, category: string }[] = [
    { amount: 1000, category: "Rent"},
    { amount: 400, category: "Student Loans"},
    { amount: 100, category: "Food"},
    { amount: 50, category: "Entertainment"},
  ];

  addExpense(addAmount: number, addCategory: string) {
    const lowercasedCategory = addCategory.toLowerCase();
    const existingExpense = this.expenses.find(expense => expense.category.toLowerCase() === lowercasedCategory);
    
    if (existingExpense) {
      existingExpense.amount += addAmount;
    } else {
      this.expenses.push({ amount: addAmount, category: addCategory });
    }
  }  

  getAllExpenses() {
    return this.expenses;
  }
}
