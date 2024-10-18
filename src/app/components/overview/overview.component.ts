import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js/auto';


@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit, AfterViewInit {
  @ViewChild('pieChart') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.createChart();
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
