import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      img: 'assets/travel-planner-app.png',
      link: '',
      title: 'Travel Planner App',
      description: 'This project covers both frontend and backend. It integrates Google Api for identifing closest airport and Kiwi Api to find cheapest flights.',
      techStack: ['Java 17', 'Angular']
    },
    {
      img: 'assets/travel-planner-app.png',
      link: '',
      title: 'Travel Planner App',
      description: 'This project covers both frontend and backend. It integrates Google Api for identifing closest airport and Kiwi Api to find cheapest flights.',
      techStack: ['Java 17', 'Angular']
    }
  ]
}
