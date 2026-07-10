import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Cta } from '../../../shared/components/cta/cta';

@Component({
  selector: 'app-services-page',
  imports: [PageHeader, Cta],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
}
