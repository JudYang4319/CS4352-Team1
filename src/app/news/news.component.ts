import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  title: string;
  url: string;
  summary: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule for *ngFor
})
export class NewsComponent {
  articles: Article[] = [
    {
      title: 'What are good and bad debts and which should I pay off first?',
      url: 'https://theconversation.com/what-are-good-and-bad-debts-and-which-should-i-pay-off-first-217779',
      summary: 'This article discusses the difference between good and bad debts and strategies for repayment.',
    },
    {
      title: 'Why you’re probably paying more interest on your mortgage than you think',
      url: 'https://theconversation.com/why-youre-probably-paying-more-interest-on-your-mortgage-than-you-think-213862',
      summary: 'This article explains common reasons homeowners may pay more interest on their mortgages than necessary.',
    },
    {
      title: 'Understanding Personal Finance: The Basics',
      url: 'https://example.com/understanding-personal-finance',
      summary: 'A brief overview of personal finance principles that everyone should know.',
    },
  ];
}
