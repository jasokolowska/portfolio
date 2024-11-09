import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NavItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  activeSection = '';

  navItems = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'BLOG']
}
