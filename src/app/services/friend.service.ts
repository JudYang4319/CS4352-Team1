import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private addedFriends: any[] = [];
  private allFriends: { id: number; name: string; points: number; rank: number; added: boolean }[] = [
    { id: 1, name: 'Drake', points: 2569, rank: 1, added: false },
    { id: 2, name: 'Kendrick Lamar', points: 2342, rank: 2, added: false },
    { id: 3, name: 'Cardi B', points: 3453, rank: 3, added: false },
    { id: 4, name: 'Travis Scott', points: 3463, rank: 4, added: false },
    { id: 5, name: 'Lil Baby', points: 2569, rank: 5, added: false },
    { id: 6, name: 'Doja Cat', points: 2342, rank: 6, added: false },
    { id: 7, name: 'J. Cole', points: 2569, rank: 7, added: true },
    { id: 8, name: 'Lil Nas X', points: 2342, rank: 8, added: false },
    { id: 9, name: 'Nicki Minaj', points: 2569, rank: 9, added: true },
    { id: 10, name: 'Eminem', points: 2342, rank: 10, added: false },
  ];

  addFriend(friend: any) {
    // Check if the friend is already added
    if (!this.addedFriends.find(f => f.id === friend.id)) {
        friend.added = true; // Set the added status to true
        this.addedFriends.push(friend); // Add to the addedFriends array

        // Update the friend in the allFriends array
        const existingFriend = this.allFriends.find(f => f.id === friend.id);
        if (existingFriend) {
            existingFriend.added = true; // Update the added status in allFriends
        }
        console.log('Friend added:', friend);
    }
}

  getAddedFriends() {
    return this.addedFriends.filter(friend => friend.added);
  }

  getAllFriends() {
    return this.allFriends;
  }
}
