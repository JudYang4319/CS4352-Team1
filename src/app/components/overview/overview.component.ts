import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RewardsService } from '../../rewards/rewards.service';
import { TransactionService } from '../../services/transaction.service';
Chart.register(...registerables);

// For Daily Question
interface Question {
  question: string;
  options: string[];
  answer: string;
}


@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit, AfterViewInit {
  @ViewChild('pieChart') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;
  isQuizOpen: boolean = false;
  isAnswered: boolean = false; // Tracks if the question has been answered
  expenses: any[];
  expensePercentage: any[];

  constructor(private rewardsService: RewardsService, private transactionService: TransactionService) {
    this.expenses = transactionService.getAllExpenses();
    const totalAmount = this.expenses.reduce((sum, element) => sum + element.amount, 0);
    this.expensePercentage = this.expenses.map(expense => Math.round((expense.amount / totalAmount) * 100));
    //console.log(this.expensePercentage);
  }

  // Array of questions
  questions: Question[] = [
    {
      question: 'What is a credit score?',
      options: ['A measure of your income', 'A number that represents your credit worthiness', 
        'The amount of money you owe', 'A type of loan'],
      answer: 'A number that represents your credit worthiness'
    },
    {
      question: 'What is the purpose of a budget?',
      options: ['To track your spending and saving', 'To increase your debt', 'To avoid paying taxes', 
        'To invest in stocks'],
      answer: 'To track your spending and saving'
    },
    {
      question: 'What does APR stand for in finance?',
      options: ['Annual Percentage Rate', 'Average Payment Rate', 'Annual Payment Return', 'Average Price Ratio'],
      answer: 'Annual Percentage Rate'
    },
    {
      question: 'What is compound interest?',
      options: ['Interest calculated only on the principal amount', 
        'Interest calculated on both the principal and previously earned interest', 
        'Interest that decreases over time', 'Interest paid only at maturity'],
      answer: 'Interest calculated on both the principal and previously earned interest'
    },
    {
      question: 'What is the primary purpose of insurance?',
      options: ['To make money through investments', 'To protect against financial loss form unforseen events', 
        'To pay off debts quickly', 'To save for retirement'],
      answer: 'To protect against financial loss form unforseen events'
    },
    {
      question: 'Which of the following is a benefit of having a good credit socre?',
      options: ['Higher interest rates on loans', 'Better chances of loan approval and lower interest rates', 
        'No need to pay bills on time', 'Increased fees for credit cards'],
      answer: 'Better chances of loan approval and lower interest rates'
    },
    {
      question: 'What is the difference between a checking account and a savings account?',
      options: ['Checking accounts earn more interest than savings accounts', 
        'Savings accounts are used for daily transactions, while checking accounts are for saving money', 
        'Checking accounts are typically used for everyday expenses, while savings accounts are meant for saving money', 
        ' There is no difference; they are the same'],
      answer: 'Checking accounts are typically used for everyday expenses, while savings accounts are meant for saving money'
    },
    {
      question: 'True or False: Student loans must be repaid even if you do not graduate.',
      options: ['True', 'False'],
      answer: 'True'
    },
    {
      question: 'True or False: Investing in stocks always guarantees a profit.',
      options: ['True', 'False'],
      answer: 'False'
    },
    {
      question: 'True or False: Getting a loan temporarily decreases your credit score.',
      options: ['True', 'False'],
      answer: 'True'
    }
  ];

  currentQuestion: Question | null = null;
  selectedOption: string | null = null;



  // Functions

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  openQuiz(): void
  {
    this.isQuizOpen = true;
    this.isAnswered = false; // Resets the answered state
  }
  
  closeQuiz(): void
  {
    if(this.isAnswered)
    {
      this.isQuizOpen = false;
      this.currentQuestion = null; // Clear the current question
    }
    else
    {
      this.isQuizOpen = false;
    }
  }

  loadRandomQuestion() {
    this.openQuiz();
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[randomIndex];
    this.selectedOption = null; // Resets selected option
  }

  submitAnswer() {
    if(this.selectedOption === this.currentQuestion?.answer) {
      this.rewardsService.addPoints(50);
      alert('Correct! You earned 50 points');
      this.isAnswered = true;
      this.closeQuiz();
    } else {
      alert('Wrong answer. Try again.');
    }
  }

  createChart(): void {
    if (this.chartRef) {
        const ctx = this.chartRef.nativeElement.getContext('2d');
        if (ctx) {
            const data: ChartData = {
               labels: this.expenses.map(expense => expense.category),
                datasets: [{
                    data: this.expensePercentage,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',  // red
                      'rgba(54, 162, 235, 0.8)',  // blue
                      'rgba(255, 206, 86, 0.8)',  // yellow
                      'rgba(75, 192, 192, 0.8)',  // green
                      'rgba(153, 102, 255, 0.8)', // purple
                      'rgba(255, 159, 64, 0.8)',  // orange
                      'rgba(255, 99, 71, 0.8)',   // tomato red
                      'rgba(0, 255, 255, 0.8)',   // cyan
                      'rgba(255, 165, 0, 0.8)',   // orange
                      'rgba(34, 193, 195, 0.8)',  // turquoise
                      'rgba(253, 29, 29, 0.8)',   // red
                      'rgba(102, 51, 153, 0.8)',  // violet
                      'rgba(0, 204, 255, 0.8)',   // sky blue
                      'rgba(255, 99, 255, 0.8)',  // pink
                      'rgba(34, 193, 195, 0.8)'   // teal
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',  // red
                      'rgba(54, 162, 235, 1)',  // blue
                      'rgba(255, 206, 86, 1)',  // yellow
                      'rgba(75, 192, 192, 1)',  // green
                      'rgba(153, 102, 255, 1)', // purple
                      'rgba(255, 159, 64, 1)',  // orange
                      'rgba(255, 99, 71, 1)',   // tomato red
                      'rgba(0, 255, 255, 1)',   // cyan
                      'rgba(255, 165, 0, 1)',   // orange
                      'rgba(34, 193, 195, 1)',  // turquoise
                      'rgba(253, 29, 29, 1)',   // red
                      'rgba(102, 51, 153, 1)',  // violet
                      'rgba(0, 204, 255, 1)',   // sky blue
                      'rgba(255, 99, 255, 1)',  // pink
                      'rgba(34, 193, 195, 1)'   // teal
                    ],
                    borderWidth: 1
                }]
            };

            const config: ChartConfiguration = {
                type: 'pie' as ChartType,
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Expense Distribution'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    return `${label}: ${value}%`;
                                }
                            }
                        }
                    }
                }
            };

            this.chart = new Chart(ctx, config);
        }
    }
  }
}
