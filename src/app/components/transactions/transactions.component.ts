import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RewardsService } from '../../rewards/rewards.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  incomeAmount: number = 0;
  expensesAmount: number = 0;
  netAmount: number = 0;

  isTransactionModalOpen: boolean = false;
  isIncomeFormOpen: boolean = false;
  isExpenseFormOpen: boolean = false;

  incomeInputAmount: number = 0;
  incomeCategory: string = '';

  expenseInputAmount: number = 0;
  expenseCategory: string = '';

  transactionHistory: { type: string, amount: number, category: string }[] = [
    { type: 'Expense', amount: 1000, category: 'Rent'},
    { type: 'Expense', amount: 400, category: 'Student Loans'},
    { type: 'Expense', amount: 100, category: 'Food'},
    { type: 'Expense', amount: 50, category: 'Entertainment'},
    { type: 'Income', amount: 2000, category: 'Job'}
  ];

  ngOnInit() {
    this.updateAmounts();
  }

  // Open the transaction modal
  openTransactionModal() {
    this.isTransactionModalOpen = true;
  }

  // Close the transaction modal
  closeTransactionModal() {
    this.isTransactionModalOpen = false;
    this.isIncomeFormOpen = false;
    this.isExpenseFormOpen = false;
  }

  // Open income form
  openIncomeForm() {
    this.isIncomeFormOpen = true;
    this.isExpenseFormOpen = false;
  }

  // Open expense form
  openExpenseForm() {
    this.isExpenseFormOpen = true;
    this.isIncomeFormOpen = false;
  }

  // Submit income
  submitIncome() {
    if (this.incomeInputAmount > 0 && this.incomeCategory) {
      this.transactionHistory.push({
        type: 'Income',
        amount: this.incomeInputAmount,
        category: this.incomeCategory
      });
      this.transactionService.addIncome(this.incomeInputAmount, this.incomeCategory);
      //this.updateAmounts();
      this.earnPoints();
      this.closeTransactionModal();
      this.transactionHistory = this.transactionService.getAllExpenses();
      this.updateAmounts();
    }
  }

  // Submit expense
  submitExpense() {
    if (this.expenseInputAmount > 0 && this.expenseCategory) {
      this.transactionHistory.push({
        type: 'Expense',
        amount: this.expenseInputAmount,
        category: this.expenseCategory
      });
      this.transactionService.addExpense(this.expenseInputAmount, this.expenseCategory);
      this.earnPoints();
      this.closeTransactionModal();
      this.transactionHistory = this.transactionService.getAllExpenses();
      this.updateAmounts();
    }
  }

  // Update total amounts
  updateAmounts() {
    this.incomeAmount = this.transactionHistory
      .filter(transaction => transaction.type === 'Income')
      .reduce((total, transaction) => total + transaction.amount, 0);

    this.expensesAmount = this.transactionHistory
      .filter(transaction => transaction.type === 'Expense')
      .reduce((total, transaction) => total + transaction.amount, 0);

    this.netAmount = this.incomeAmount - this.expensesAmount;
  }
  pointFlag: boolean = true;
  constructor(private rewardsService: RewardsService, private transactionService: TransactionService) { }

  earnPoints() {
    this.rewardsService.addPoints(100);
    alert('you earned 100 points');
    this.pointFlag = false;
  }

}
