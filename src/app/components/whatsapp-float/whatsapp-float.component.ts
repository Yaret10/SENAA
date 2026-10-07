import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({ selector: 'app-whatsapp-float', templateUrl: './whatsapp-float.component.html', styleUrl: './whatsapp-float.component.css' })
export class WhatsappFloatComponent { readonly config = SITE_CONFIG; }
