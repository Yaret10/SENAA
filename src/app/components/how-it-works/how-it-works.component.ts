import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-how-it-works', imports: [CommonModule], templateUrl: './how-it-works.component.html', styleUrl: './how-it-works.component.css' })
export class HowItWorksComponent { readonly steps = [{ title: 'Nos contactas', text: 'Cuéntanos qué equipo necesita atención.' }, { title: 'Coordinamos la visita', text: 'Elegimos el horario más conveniente para ti.' }, { title: 'Diagnosticamos el equipo', text: 'Revisamos la causa y te explicamos el proceso.' }, { title: 'Reparamos o mantenemos', text: 'Realizamos el servicio autorizado con cuidado.' }, { title: 'Verificamos el funcionamiento', text: 'Comprobamos que el equipo quede trabajando bien.' }]; }
