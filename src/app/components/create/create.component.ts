import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FlagService } from '../../services/flag.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild('guildNameInput') guildNameInput!: ElementRef;

  selectedColor: string | null = null;
  selectedFlag: string | null = null;
  selectedIconId: number | null = null;

  constructor(private router: Router, private flagService: FlagService) {
    const flag = this.flagService.getFlag();
    this.selectedColor = flag.color;
    this.selectedIconId = flag.iconId;
  }

  selectFlag(flag: string) {
    this.selectedFlag = flag;
    this.selectedIconId = this.getIconIdFromFlag(flag);
    this.flagService.setFlag(null, this.selectedIconId);
    console.log(`Selected Flag: ${flag}`);
  }

  getIconIdFromFlag(flag: string): number | null {
    switch (flag) {
        case 'green': return 10;
        case 'blue': return 11;
        case 'pink': return 12;
        default: return null;
    }
  }

  goBack() {
    this.router.navigate(['/overview']);
  }

  goToCustomize() {
    this.router.navigate(['/flagcreator']);
  }

  goToViewGuild(){
    this.router.navigate(['/viewguild'])
  }

  saveGuild() {
    if (!this.selectedIconId) {
      window.alert("Please select a flag");
      return;
    }
    const guildName = this.guildNameInput.nativeElement.value;
    if (!guildName) {
      window.alert("Please enter a name");
      return;
    }
    this.flagService.setGuildName(guildName);
    window.alert("Flag saved successfully");
    this.goToViewGuild();
  }
}
