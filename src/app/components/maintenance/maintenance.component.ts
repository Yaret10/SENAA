import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-maintenance', imports: [CommonModule], templateUrl: './maintenance.component.html', styleUrl: './maintenance.component.css' })
export class MaintenanceComponent {
  readonly points = [
    ['⌁', 'Más vida útil', 'El cuidado periódico ayuda a conservar piezas y sistemas internos.'], ['₿', 'Menor consumo', 'Un equipo limpio y ajustado trabaja con mayor eficiencia.'], ['✓', 'Menos imprevistos', 'Detectamos señales tempranas antes de que se conviertan en averías.'], ['⌁', 'Uso más seguro', 'Revisamos conexiones, componentes y funcionamiento general.']
  ];
}
