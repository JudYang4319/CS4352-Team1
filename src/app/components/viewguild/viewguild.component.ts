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
  public icons = [
    { id: 1, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878209262948453/image.png?ex=6730fe08&is=672fac88&hm=6a0bcadaa18d1ce2160f315b23a48adeadace3980694c2392f131f74759aa7e7&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 2, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878246675877958/image.png?ex=6730fe11&is=672fac91&hm=8224df1abbb43c47dc081cd7be072fbf9026b2e1a0dcdc7e890a1e41f7bdeb5b&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 3, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878287788441620/image.png?ex=6730fe1b&is=672fac9b&hm=68de048661fff9ce243d7d7cf6de0ba60d45a7035234fbfaebae6dcd0cf68ce5&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 4, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878583805775985/image.png?ex=6730fe61&is=672face1&hm=c1f869d66721704e44fac775441ef0f9824a557b5e96a8cdf7b31a675cf1e206&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 5, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878584049172600/image.png?ex=6730fe61&is=672face1&hm=ce3fa18aa8d45c8f1f3a00b36f1eb552da069e41a336a2824f91a0fbe278b787&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 6, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878584326000700/image.png?ex=6730fe61&is=672face1&hm=592880198c7d94ef44de2d0af7ff15f96d4b0eb8b9b8debcd1933b5f1c2d1435&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 7, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878584598364241/image.png?ex=6730fe62&is=672face2&hm=adccc415d9e7031dfdb7c261bad9b381db516c3b6a4d84bc5c8a1abf7b75a322&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 8, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878584841900042/image.png?ex=6730fe62&is=672face2&hm=79183e29e3c4fc0d7570b2ea0bcf46aac3450e8910ed04812d9ab0e8bf017fc1&=&format=webp&quality=lossless&width=161&height=161' },
    { id: 9, url: 'https://media.discordapp.net/attachments/867118819898163232/1304878585072582759/image.png?ex=6730fe62&is=672face2&hm=134c00a085960134bee378730b095d7fee212f14d353cbd0af7e208b9dadfc3d&=&format=webp&quality=lossless&width=161&height=161' }
  ];

  constructor(
    private flagService: FlagService,
    private router: Router
  ) { }

  ngOnInit() {
    const flag = this.flagService.getFlag();
    this.selectedColor = flag.color;
    this.selectedIconId = flag.iconId;
    document.documentElement.style.setProperty('--selectedColor', this.selectedColor);

    // Log the values to ensure they are set correctly
    console.log("Selected Color:", this.selectedColor);
    console.log("Selected Icon ID:", this.selectedIconId);

    // Process the selected icon image
  
  }

  getSelectedIconUrl() {
    const selectedIcon = this.icons.find(icon => icon.id === this.selectedIconId);
    return selectedIcon ? selectedIcon.url : '';
  }

  

  goToLeaderboard() {
    this.router.navigate(['/friends']);
  }

  editGuildSettings() {
    this.router.navigate(['/flagcreator']);
  }

  inviteFriends() {
    this.router.navigate(['/friends']);
  }
}
