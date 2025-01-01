import { Component, input } from '@angular/core';
import { SectionHeaderComponent } from "../header/section-header/section-header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  sectionName = input<string>()
}
