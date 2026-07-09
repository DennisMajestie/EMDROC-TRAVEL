import { Component } from '@angular/core';

@Component({
  selector: 'app-airline-partners',
  imports: [],
  templateUrl: './airline-partners.html',
  styleUrl: './airline-partners.css',
})
export class AirlinePartners {
  logos = [
    'partners/British Airways.jpg',
    'partners/Air France.jpg',
    'partners/KLM.png',
    'partners/Qatar Airways.png',
    'partners/Lufthansa.png',
    'partners/Emiratess.png',
    'partners/Virgin Atlantic.jpg',
    'partners/Arik Air.png',
    'partners/Aero.jpg',
    'partners/Qantas.png',
  ];
}
