import { Component, OnInit } from '@angular/core';
import { FlagService } from '../../services/flag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewguild',
  templateUrl: './viewguild.component.html',
  styleUrls: ['./viewguild.component.css']
})
export class ViewGuildComponent implements OnInit {
  public selectedColor: string | null = null; // Store the selected color
  public selectedIconId: number | null = null; // Store the selected icon ID
  public guildName: string | null = null; // Add this line
  public icons = [
    { id: 1, url: '/images/iconart/image.png' },
    { id: 2, url: '/images/iconart/image2.png' },
    { id: 3, url: '/images/iconart/image3.png' },
    { id: 4, url: '/images/iconart/image4.png' },
    { id: 5, url: '/images/iconart/image5.png' },
    { id: 6, url: '/images/iconart/image6.png' },
    { id: 7, url: '/images/iconart/image7.png' },
    { id: 8, url: '/images/iconart/image8.png' },
    { id: 9, url: '/images/iconart/image9.png' },
    { id: 11, url: '/images/iconart/blueflag.PNG' },
    { id: 12, url: '/images/iconart/pinkflag.PNG' },
    { id: 10, url: '/images/iconart/greenflag.PNG' },
     
  ];

  constructor(
    private flagService: FlagService,
    private router: Router
  ) { }

  ngOnInit() {
    const flag = this.flagService.getFlag();
    this.selectedColor = flag.color;
    this.selectedIconId = flag.iconId;
    this.guildName = this.flagService.getGuildName(); // Retrieve the guild name
    document.documentElement.style.setProperty('--selectedColor', this.selectedColor);

    // Log the values to ensure they are set correctly
    console.log("Selected Color:", this.selectedColor);
    console.log("Selected Icon ID:", this.selectedIconId);
    console.log("Guild Name:", this.guildName); // Log the guild name


  
  }

  getSelectedIconUrl() {
    const selectedIcon = this.icons.find(icon => icon.id === this.selectedIconId);
    return selectedIcon ? selectedIcon.url : '';
  }

  

  goToLeaderboard() {
    this.router.navigate(['/friends']);
  }

  editGuildSettings() {
    this.router.navigate(['/create']);
  }

  inviteFriends() {
    this.router.navigate(['/friends']);
  }
}
