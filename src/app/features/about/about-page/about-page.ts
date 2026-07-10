import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Cta } from '../../../shared/components/cta/cta';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, PageHeader, Cta],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
