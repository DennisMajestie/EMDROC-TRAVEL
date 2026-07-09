import { Component } from '@angular/core';

@Component({
  selector: 'app-airline-partners',
  imports: [],
  templateUrl: './airline-partners.html',
  styleUrl: './airline-partners.css',
})
export class AirlinePartners {
  logos = [
    'partners/british-airways.jpg',
    'partners/air-france.jpg',
    'partners/KLM.png',
    'partners/qatar-airways.png',
    'partners/Lufthansa.png',
    'partners/Emiratess.png',
    'partners/virgin-atlantic.jpg',
    'partners/arik-air.png',
    'partners/Aero.jpg',
    'partners/Qantas.png',
  ];
}
