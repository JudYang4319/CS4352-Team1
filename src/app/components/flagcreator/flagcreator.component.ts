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

  colorGroups: string[][] = [
    ['#000000', '#0000FF', '#008000', '#FFFF00', '#FF0000'],
    ['#e52165', '#0d1137', '#d72631', '#a2d5c6', '#077b8a'],
    ['#cf1578', '#e8d21d', '#039fbe', '#b20238', '#e75874'],
    ['#8a307f', '#79a7d3', '#6883bc', '#1d3c45', '#d2601a'],
    ['#aed6dc', '#ff9a8d', '#4a536b', '#da68a0', '#77c593'],
    ['#316879', '#f47a60', '#7fe7dc', '#ced7d8', '#d902ee'],
    ['#ffcce7', '#daf2dc', '#81b7d2', '#4d5198', '#ddc3a5']
  ];

  constructor(private router: Router, private flagService: FlagService) {}

  goBack() {
    this.router.navigate(['/create']);
  }

  saveFlag() {
    if (this.selectedIconId === null) {
      alert("No icon selected!");
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


