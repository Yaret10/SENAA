import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-testimonials', imports: [CommonModule], templateUrl: './testimonials.component.html', styleUrl: './testimonials.component.css' })
export class TestimonialsComponent { readonly testimonials = [{ quote: 'Llegaron a la hora acordada, explicaron la falla y mi lavadora quedó funcionando el mismo día.', name: 'María G.', service: 'Reparación de lavadora' }, { quote: 'Muy ordenados y profesionales. El precio fue el que me indicaron antes de realizar el trabajo.', name: 'Carlos R.', service: 'Servicio de refrigeradora' }, { quote: 'La atención por WhatsApp fue rápida y coordinar la visita fue muy fácil. Los recomendaría.', name: 'Ana P.', service: 'Diagnóstico de cocina' }]; }
