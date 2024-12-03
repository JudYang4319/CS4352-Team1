import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friendlist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent {
  friends: { id: number; name: string; points: number; rank: number; added: boolean }[] = [];
  searchTerm: string = '';
  filteredFriends: { id: number; name: string; points: number; rank: number; }[] = [];

  constructor(private router: Router, private friendService: FriendService) {
    this.friends = this.friendService.getAllFriends();
    this.filteredFriends = this.friends;
  }

  goToProfile(friend: any) {
    this.router.navigate(['/friend-profile', friend.id]);
  }

  goBack() {
    window.history.back();
  }

  filterFriends() {
    this.filteredFriends = this.friends.filter(friend => 
      friend.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
