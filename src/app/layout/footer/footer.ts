import { Component } from '@angular/core';
import { EMDROC_CONTACT_INFO } from '../../core/models';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly contact = EMDROC_CONTACT_INFO;

  protected readonly quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  protected readonly services = [
    { label: 'Flight Booking', href: '/services' },
    { label: 'Hotel Reservations', href: '/services' },
    { label: 'Tour Packages', href: '/services' },
    { label: 'Airport Transfers', href: '/services' },
    { label: 'Travel Insurance', href: '/services' },
  ];

  protected readonly socials = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
  ];
}
