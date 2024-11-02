import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input()
  title = "";

  @Input()
  active = false;

  print() {
    console.log('is item active: ', this.active)
  }
}
