import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../rewards/rewards.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  totalPoints: number = 0;

  constructor(private rewardsService: RewardsService) {}

  ngOnInit() {
    // Subscribe to the points observable
    this.rewardsService.points$.subscribe(points => {
      this.totalPoints = points;
    });
  }
}
