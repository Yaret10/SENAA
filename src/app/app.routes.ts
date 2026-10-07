import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EquipmentDetailComponent } from './pages/equipment-detail/equipment-detail.component';
import { EQUIPMENT_PAGES } from './equipment.data';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'SENAA | Servicio técnico y mantenimiento' },
  ...EQUIPMENT_PAGES.map((equipment) => ({
    path: `servicios/${equipment.slug}`,
    component: EquipmentDetailComponent,
    title: `${equipment.name} | Mantenimiento y reparación | SENAA`,
    data: { equipment }
  })),
  { path: '**', redirectTo: '' }
];
