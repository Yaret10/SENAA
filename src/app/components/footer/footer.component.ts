import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../site.config';

@Component({ selector: 'app-footer', imports: [RouterLink], templateUrl: './footer.component.html', styleUrl: './footer.component.css' })
export class FooterComponent { readonly config = SITE_CONFIG; readonly year = new Date().getFullYear(); }
