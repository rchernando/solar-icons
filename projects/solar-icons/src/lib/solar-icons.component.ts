import { Component, input } from '@angular/core';
import { SolarIconsService } from './solar-icons.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'solar-icons',
  standalone: true,
  imports: [],
  template: `
    '<span [innerHTML]="iconHtml"></span>
  `,
})
export class SolarIconsComponent {
  public name = input.required<string>()
  public style = input<string>('outline');
  public iconHtml!: SafeHtml;

  constructor(
    private iconService: SolarIconsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const iconData = this.iconService.getIcon(this.name(), this.style());
    if (iconData) {
      this.iconHtml = this.sanitizer.bypassSecurityTrustHtml(iconData);
    }
  }
}
