import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { BrandsComponent } from '../../components/brands/brands.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MaintenanceComponent } from '../../components/maintenance/maintenance.component';
import { RisksComponent } from '../../components/risks/risks.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { WhatsappFloatComponent } from '../../components/whatsapp-float/whatsapp-float.component';

@Component({ selector: 'app-home', imports: [HeaderComponent, HeroComponent, ServicesComponent, MaintenanceComponent, RisksComponent, BenefitsComponent, HowItWorksComponent, BrandsComponent, ContactFormComponent, FooterComponent, WhatsappFloatComponent], templateUrl: './home.component.html' })
export class HomeComponent {}
