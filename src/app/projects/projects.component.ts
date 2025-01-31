import { Component, input } from '@angular/core';
import { SectionHeaderComponent } from "../header/section-header/section-header.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  sectionName = input<string>();
  projects = [
    {
      img: 'assets/travel-planner-app.png',
      link: 'https://github.com/jasokolowska/travel-planner-app',
      title: 'Travel Planner App',
      description:
        'This project covers both frontend and backend. It integrates Google Api for identifing closest airport and Kiwi Api to find cheapest flights.',
      techStack: ['Java 17', 'Angular 14', 'Docker', 'Spring Boot', 'PostgreSql', 'Liquibase', 'Mapstruct'],
    }
  ];
}
