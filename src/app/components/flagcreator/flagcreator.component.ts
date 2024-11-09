import { Component } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { Router } from '@angular/router';
import { FlagService } from '../../services/flag.service';

@Component({
  selector: 'app-flagcreator',
  standalone: true,
  templateUrl: './flagcreator.component.html',
  styleUrls: ['./flagcreator.component.css'],
  imports: [ColorPickerModule]
})
export class FlagcreatorComponent {
  public selectedColor: string = '#ff0000'; // Default color
  public selectedIconId: number | null = null; // Store selected icon

  constructor(private router: Router, private flagService: FlagService) {}

  goBack() {
    this.router.navigate(['/create']);
  }

  saveFlag() {
    if (this.selectedIconId === null) {
      console.error("No icon selected!");
      return; // Prevent navigation if no icon is selected
    }

    this.flagService.setFlag(this.selectedColor, this.selectedIconId); // Store in service
    this.router.navigate(['/guildcreated']); // Navigate to guild created page
  }

  selectIcon(icon: number) {
    this.selectedIconId = icon; // Store the selected icon
    console.log(icon);
  }
}


