import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  private color: string | null = null;
  private iconId: number | null = null;

  setFlag(color: string, iconId: number) {
    this.color = color;
    this.iconId = iconId;
  }

  getFlag() {
    return { color: this.color, iconId: this.iconId };
  }

  clearFlag() {
    this.color = null;
    this.iconId = null;
  }
}
