import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({ selector: 'app-contact-cta', templateUrl: './contact-cta.component.html', styleUrl: './contact-cta.component.css' })
export class ContactCtaComponent { readonly config = SITE_CONFIG; }
