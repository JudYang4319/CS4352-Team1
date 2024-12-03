import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-myfriends',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.css']
})
export class MyFriendsComponent {
    searchTerm: string = '';
    filteredFriends: { id: number; name: string; points: number; rank: number; added: boolean; }[] = [];

    constructor(private router: Router, private friendService: FriendService) {
        this.filteredFriends = this.friendService.getAllFriends().filter(friend => friend.added);
        console.log('Added friends:', this.filteredFriends);
    }

    goToProfile(friend: any) {
        this.router.navigate(['/friend-profile', friend.id]);
    }

    goBack() {
        window.history.back();
    }

    filterFriends() {
        this.filteredFriends = this.friendService.getAllFriends().filter(friend => 
            friend.name.toLowerCase().includes(this.searchTerm.toLowerCase()) && friend.added
        );
    }
}
