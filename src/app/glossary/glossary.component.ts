import { Component } from '@angular/core';
import { RewardsService } from '../rewards/rewards.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.css'
})
export class GlossaryComponent {

  pointFlag: boolean = true;
  constructor(private rewardsService: RewardsService) {}

  earnPoints()
  {
    this.rewardsService.addPoints(100);
    alert('You earned 100 points!');
    this.pointFlag = false;
  }
}
