import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  private color: string | null = null;
  private iconId: number | null = null;
  private guildName: string | null = null;

  setFlag(color: string | null, iconId: number | null) {
    this.color = color || '#FFFFFF';
    this.iconId = iconId;
  }

  getFlag() {
    return { color: this.color, iconId: this.iconId };
  }

  clearFlag() {
    this.color = null;
    this.iconId = null;
    this.guildName = null;
  }

  setGuildName(name: string | null) {
    this.guildName = name;
  }

  getGuildName() {
    return this.guildName;
  }
}
