import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FriendService } from '../services/friend.service';
import { CommonModule } from '@angular/common';
import { RewardsService } from '../rewards/rewards.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
    filteredFriends: { id: number; name: string; points: number; rank: number; added: boolean; }[] = [];

    constructor(private router: Router, private friendService: FriendService, private rewardService: RewardsService) {
        this.filteredFriends = this.friendService.getAllFriends().filter(friend => friend.added);
        this.filteredFriends.push({id: 0, name: 'user', points: rewardService.getTotalPoints(), rank: 0, added: true});
        this.filteredFriends.sort((a, b) => b.points - a.points);
        console.log('Added friends:', this.filteredFriends);
    }

    goToProfile(friend: any) {
        this.router.navigate(['/friend-profile', friend.id]);
    }

    goBack() {
        window.history.back();
    }
}
