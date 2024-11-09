import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
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

  // Array of questions
  questions: Question[] = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Marid', 'Paris', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4'
    },
    {
      question: 'Largest ocean on Earth?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      answer: 'Pacific'
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
    this.isAnswered = true;
    this.isQuizOpen = false;
    this.currentQuestion = null; // Clear the current question
  }

  loadRandomQuestion() {
    this.openQuiz();
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[randomIndex];
    this.selectedOption = null; // Resets selected option
  }

  submitAnswer() {
    if(this.selectedOption === this.currentQuestion?.answer) {
      alert('Correct! You earned 50 points');
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
          labels: ['Rent', 'Student Loans', 'Food', 'Entertainment'],
          datasets: [{
            data: [25, 25, 25, 25],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
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
              }
            }
          }
        };

        this.chart = new Chart(ctx, config);
      }
    }
  }
}
