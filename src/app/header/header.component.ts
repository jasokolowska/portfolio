import { Component, input, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';

type Media = {
  name: string;
  src: string;
  icon: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NavItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection = '';
  navItems = input<string[]>();
  socialMediaData: Media[] = [
    {
      src: 'https://github.com/jasokolowska',
      name: 'GitHub',
      icon: 'pi pi-github',
    },
    {
      src: 'https://www.linkedin.com/in/jsoko%C5%82owska/',
      name: 'LinkedIn',
      icon: 'pi pi-linkedin',
    },
    // {
    //   src: 'https://github.com/jasokolowska',
    //   name: 'instagram',
    // },
  ];
}
