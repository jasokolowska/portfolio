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
export class HeaderComponent implements OnInit{
  activeSection = '';

  navItems = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'BLOG']

  ngOnInit(): void {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id.toUpperCase();
          console.log('entry.target.id: ', entry.target.id);
        }
      })
    },
    {
      root: null,
      threshold: 0.5,
    })

    sections.forEach((section) => observer.observe(section))
  }


}
