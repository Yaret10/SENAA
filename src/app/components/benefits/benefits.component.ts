import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-benefits', imports: [CommonModule], templateUrl: './benefits.component.html', styleUrl: './benefits.component.css' })
export class BenefitsComponent { readonly benefits = ['Técnicos capacitados', 'Atención a domicilio', 'Diagnóstico profesional', 'Mantenimiento preventivo', 'Reparaciones confiables', 'Atención rápida', 'Precios claros', 'Servicio responsable']; }
