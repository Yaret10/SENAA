import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-brands', imports: [CommonModule], templateUrl: './brands.component.html', styleUrl: './brands.component.css' })
export class BrandsComponent { readonly brands = ['SAMSUNG', 'LG', 'Whirlpool', 'Electrolux', 'BOSCH', 'Mabe']; }
