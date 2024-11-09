import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {
  friend: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const friendId = this.route.snapshot.paramMap.get('id');
    // Fetch the friend's data based on the ID
    if (friendId) {
      this.friend = this.getFriendById(friendId);
    }
  }

  getFriendById(id: string) {
    // Replace this with actual data fetching logic
    const friends = [
      { id: 1, name: 'Drake', points: 2569 },
      { id: 2, name: 'Kendrick Lamar', points: 2342 },
      { id: 3, name: 'Cardi B', points: 3453 },
      { id: 4, name: 'Travis Scott', points: 3463 },
      { id: 5, name: 'Lil Baby', points: 2569 },
      { id: 6, name: 'Doja Cat', points: 2342 },
      { id: 7, name: 'J. Cole', points: 2569 },
      { id: 8, name: 'Lil Nas X', points: 2342 },
      { id: 9, name: 'Nicki Minaj', points: 2569 },
      { id: 10, name: 'Eminem', points: 2342 },
      // ... other friends
    ];
    return friends.find(friend => friend.id === parseInt(id));
  }

  addFriend() {
    // Logic to add friend
    alert(`Added ${this.friend.name} as a friend!`);
  }
  goBack() {
    window.history.back();
  }
}
