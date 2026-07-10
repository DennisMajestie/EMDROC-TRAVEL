import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) primaryBtnText!: string;
  @Input() primaryBtnLink = '/contact';
  @Input() secondaryBtnText?: string;
  @Input() secondaryBtnLink?: string;
  @Input() bgImage?: string;
}
