import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-risks', imports: [CommonModule], templateUrl: './risks.component.html', styleUrl: './risks.component.css' })
export class RisksComponent {
  readonly risks = [
    { equipment: 'Cocinas', icon: '♨', items: ['Fugas de gas', 'Quemadores obstruidos', 'Mala combustión', 'Riesgo de incendio'] }, { equipment: 'Refrigeradoras', icon: '❄', items: ['Pérdida de refrigeración', 'Daño del compresor', 'Mayor consumo eléctrico', 'Pérdida de alimentos'] }, { equipment: 'Lavadoras', icon: '◉', items: ['Fugas de agua', 'Fallas de bomba o motor', 'Vibraciones excesivas', 'Daño del tambor'] }, { equipment: 'Lavasecas', icon: '≋', items: ['Problemas de secado', 'Acumulación de pelusa', 'Sobrecalentamiento', 'Fallas en sensores'] }, { equipment: 'Termas', icon: '♨', items: ['Problemas eléctricos', 'Fugas de agua', 'Acumulación de sarro', 'Sobrecalentamiento'] }
  ];
}
