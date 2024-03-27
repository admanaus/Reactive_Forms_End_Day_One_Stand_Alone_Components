import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerContactFormComponent } from './customer-contact-form/customer-contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CustomerContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-example';
}
