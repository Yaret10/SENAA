import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-contact-form', imports: [CommonModule, FormsModule], templateUrl: './contact-form.component.html', styleUrl: './contact-form.component.css' })
export class ContactFormComponent {
  submitted = false;
  request = { name: '', phone: '', district: '', equipment: '', service: '', problem: '', message: '' };
  submit(): void { this.submitted = true; }
}
