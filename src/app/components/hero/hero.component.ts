import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({ selector: 'app-hero', templateUrl: './hero.component.html', styleUrl: './hero.component.css' })
export class HeroComponent { readonly config = SITE_CONFIG; }
