import { Component, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input()
  title = "";
}