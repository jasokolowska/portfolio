import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TagModule, ChipModule ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Capgemini',
      position: 'Software Engineer',
      duration: 'June 2022 - Present',
      description: 'Actively contributed to both backend and frontend development for enterprise-level applications.',
      tasks: [
        'Spearheaded frontend development using Angular 14+, creating user-friendly interfaces.',
        'Integrated Oracle DB into Spring applications and designed RESTful APIs.',
        'Contributed to backend development using Java 8+, Spring Boot, and Hibernate.',
        'Developed gateway applications to ensure smooth system integrations using OpenAPI.',
        'Maintained and refactored ongoing projects, debugging and addressing issues identified during testing.',
      ],
      techStack: [
        'Java 8+',
        'Spring Boot',
        'Hibernate',
        'OpenAPI',
        'Oracle DB',
        'Keycloak',
        'Angular 14+',
        'PrimeNg',
        'NgRx',
        'JUnit',
        'Mockito',
        'TestCafe'
      ]
    },
    {
      company: 'Intive',
      position: 'Java Intern',
      duration: 'January 2022 - April 2022',
      description: 'Gained valuable hands-on experience developing backend applications.',
      tasks: [
        'Built a backend application for creating polls using Java 17, Spring Boot, Docker, and PostgreSQL.',
        'Implemented Flyway for seamless database migrations.'
      ],
      techStack: [
        'Java 17',
        'Spring Boot',
        'Docker',
        'PostgreSQL',
        'FlyWay'
      ]
    },
    {
      company: '3M Wroclaw',
      position: 'Senior Process Engineer',
      duration: 'September 2013 - May 2022',
      description: 'Managed and optimized production processes for automated assembly and metal processing.',
      tasks: [
        'Supervised production processes, including automated parts assembly and metal cold processing.',
        'Led multiple Lean and Six Sigma projects to optimize production, analyzing data trends and implementing improvements.',
        'Contributed to the integration of Industry 4.0 elements into production lines.',
        'Started as a Junior Process Engineer and advanced to Senior Engineer by 2019.'
      ],
      techStack: [
        'Lean',
        'Six Sigma',
        'Industry 4.0',
        'AutoCad',
        'SCADA Systems',
        'Data Analytics',
        'FANUC Robotics (KAREL)',
        'Machine Vision'
      ]
    }
  ];
}
