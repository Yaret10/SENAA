import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../site.config';

@Component({ selector: 'app-header', imports: [RouterLink], templateUrl: './header.component.html', styleUrl: './header.component.css' })
export class HeaderComponent {
  readonly config = SITE_CONFIG;
  menuOpen = false;
  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }
  @HostListener('window:resize') onResize(): void { if (window.innerWidth > 800) this.menuOpen = false; }
}
