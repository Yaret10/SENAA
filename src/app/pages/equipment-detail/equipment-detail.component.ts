import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappFloatComponent } from '../../components/whatsapp-float/whatsapp-float.component';
import { EQUIPMENT_PAGES, EquipmentPage } from '../../equipment.data';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-equipment-detail',
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, WhatsappFloatComponent],
  templateUrl: './equipment-detail.component.html',
  styleUrl: './equipment-detail.component.css'
})
export class EquipmentDetailComponent {
  readonly equipment = inject(ActivatedRoute).snapshot.data['equipment'] as EquipmentPage;
  readonly otherEquipment = EQUIPMENT_PAGES.filter((item) => item.slug !== this.equipment.slug);
  readonly config = SITE_CONFIG;
}
