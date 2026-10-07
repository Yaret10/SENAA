import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EQUIPMENT_PAGES } from '../../equipment.data';

@Component({ selector: 'app-services', imports: [CommonModule, RouterLink], templateUrl: './services.component.html', styleUrl: './services.component.css' })
export class ServicesComponent {
  readonly services = EQUIPMENT_PAGES;
  readonly icons = ['♨', '❄', '◉', '≋', '♨'];
}
