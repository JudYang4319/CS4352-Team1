import { Component } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { Router } from '@angular/router';
import { FlagService } from '../../services/flag.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flagcreator',
  standalone: true,
  templateUrl: './flagcreator.component.html',
  styleUrls: ['./flagcreator.component.css'],
  imports: [ColorPickerModule, CommonModule, FormsModule]
})
export class FlagcreatorComponent {
  public selectedColor: string = '#ff0000'; // Default color
  public selectedIconId: number | null = null; // Store selected icon
  // In your flagcreator.component.ts
  public showIcons: boolean = true; // Initialize to show icons by default
  public opacityValue: number = 100; // Initialize with a default value
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
    alert(`Icon ${icon} has been selected for the guild!`); // Confirmation message
    console.log(icon);
  }

  // New method to handle color selection
  selectColor(color: string) {
    this.selectedColor = color; // Update selected color
    alert(`Color ${color} has been selected for the guild!`); // Confirmation message
  }
}


