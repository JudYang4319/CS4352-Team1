import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FriendProfileComponent implements OnInit {
  friend: any;
  enabled: boolean = false;

  constructor(private route: ActivatedRoute, private friendService: FriendService) { }

  ngOnInit(): void {
    this.loadFriend();
  }

  loadFriend() {
    const friendId = this.route.snapshot.paramMap.get('id');
    if (friendId) {
      this.friend = this.friendService.getAllFriends().find(friend => friend.id === parseInt(friendId));
      this.enabled = this.friend?.added;
      
    }
  }

  addFriend() {
    this.enabled = !this.enabled; // Toggle the button state
    if (!this.friend.added) {
        this.friendService.addFriend(this.friend); // Call the service to add the friend
        this.friend.added = true; // Update the friend object directly
        this.enabled = true; // Set enabled to true since the friend is now added
        console.log('Friend added:', this.friend);
    } else {
        console.log('Friend is already added:', this.friend);
    }
}

  goBack() {
    window.history.back();
  }
}
