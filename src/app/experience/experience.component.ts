import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TagModule, ChipModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Fortum Service Polska',
      position: 'Fullstack Developer',
      duration: 'Oct 2024 - Present',
      description:
        'Developing and enhancing backend functionalities within a microservices architecture on AWS. Collaborated on multiple services using a wide range of technologies to deliver scalable solutions.',
      tasks: [],
      techStack: [
        'Java 8+',
        'Spring Boot',
        'Hibernate',
        'Kotlin',
        'Ktorm',
        'JUnit',
        'Mockito',
        'AWS (Amazon Web Services)',
        'Flyway',
        'Microservices architecture',
      ],
    },
    {
      company: 'Capgemini',
      position: 'Software Engineer',
      duration: 'June 2022 - Sep 2024',
      description:
        'Actively contributed to both backend and frontend development for enterprise-level applications.Spearheaded frontend development using Angular 14+.Contributed to backend development using Java 8+, Spring Boot, and Hibernate.',
      tasks: [],
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
        'TestCafe',
      ],
    },
    {
      company: 'Intive',
      position: 'Java Intern',
      duration: 'January 2022 - April 2022',
      description:
        'Gained valuable hands-on experience developing backend applications. Built a backend application for creating polls using Java 17, Spring Boot, Docker, and PostgreSQL.',
      tasks: [],
      techStack: ['Java 17', 'Spring Boot', 'Docker', 'PostgreSQL', 'FlyWay'],
    },
    {
      company: '3M Wroclaw',
      position: 'Senior Process Engineer',
      duration: 'September 2013 - May 2022',
      description:
        'Managed and optimized production processes for automated assembly and metal processing.',
      tasks: [
        'Supervised production processes, including automated parts assembly and metal cold processing.',
        'Led multiple Lean and Six Sigma projects to optimize production, analyzing data trends and implementing improvements.',
        'Contributed to the integration of Industry 4.0 elements into production lines.'      
      ],
      techStack: [
        'Lean',
        'Six Sigma',
        'Industry 4.0',
        'AutoCad',
        'SCADA Systems',
        'Data Analytics',
        'FANUC Robotics (KAREL)',
        'Machine Vision',
      ],
    },
  ];
}
