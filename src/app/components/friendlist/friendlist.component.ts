import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friendlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent {
    friends = [
        { id: 1, name: 'Drake', points: 2569, rank: 1 },
        { id: 2, name: 'Kendrick Lamar', points: 2342, rank: 2 },
        { id: 3, name: 'Cardi B', points: 3453, rank: 3 },
        { id: 4, name: 'Travis Scott', points: 3463, rank: 4 },
        { id: 5, name: 'Lil Baby', points: 2569, rank: 5 },
        { id: 6, name: 'Doja Cat', points: 2342, rank: 6 },
        { id: 7, name: 'J. Cole', points: 2569, rank: 7 },
        { id: 8, name: 'Lil Nas X', points: 2342, rank: 8 },
        { id: 9, name: 'Nicki Minaj', points: 2569, rank: 9 },
        { id: 10, name: 'Eminem', points: 2342, rank: 10 },
    ];

    searchTerm: string = '';
    filteredFriends = this.friends;

    constructor(private router: Router) {}

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
