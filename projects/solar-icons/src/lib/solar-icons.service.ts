import { Injectable, signal } from '@angular/core';
import { IconDefinition } from './model/icon.model';
import * as icons from './icons/index';

@Injectable({
  providedIn: 'root'
})
export class SolarIconsService {
  private icons: { [key: string]: { [style: string]: string } } = {};

  constructor() {
    this.registerIcons(icons);
  }

  registerIcons(iconSet: { [key: string]: IconDefinition }) {
    Object.keys(iconSet).forEach(key => {
      const icon = iconSet[key];
      if (!this.icons[icon.name]) {
        this.icons[icon.name] = {};
      }
      this.icons[icon.name][icon.style] = icon.data;
    });
  }

  getIcon(name: string, style: string): string | undefined {
    return this.icons[name]?.[style];
  }

}
