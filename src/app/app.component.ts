import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BlogPostsComponent } from "./blog-posts/blog-posts.component";
import { ContactComponent } from "./contact/contact.component";
import { TagModule } from 'primeng/tag';
import { HeaderComponent } from "./header/header.component";
import { NavItemComponent } from "./header/nav-item/nav-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TagModule, RouterOutlet, AboutComponent, ExperienceComponent, ProjectsComponent, BlogPostsComponent, ContactComponent, HeaderComponent, NavItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'portfolio';
}
