import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlagService } from '../../services/flag.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flagcreator',
  standalone: true,
  templateUrl: './flagcreator.component.html',
  styleUrls: ['./flagcreator.component.css'],
  imports: [CommonModule, FormsModule]
})
export class FlagcreatorComponent {
  public selectedColor: string | null = null; // Allow null for no color
  public selectedIconId: number | null = null;
  public showIcons: boolean = true;
  public opacityValue: number = 100;

  constructor(private router: Router, private flagService: FlagService) {}

  goBack() {
    this.router.navigate(['/create']);
  }

  saveFlag() {
    if (this.selectedIconId === null) {
      console.error("No icon selected!");
      return;
    }

    this.flagService.setFlag(this.selectedColor, this.selectedIconId);
    this.router.navigate(['/create']);
  }

  selectIcon(icon: number) {
    this.selectedIconId = icon;
    console.log(icon);
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }
}


