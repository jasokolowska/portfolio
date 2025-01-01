import { Component, input } from '@angular/core';
import { SectionHeaderComponent } from "../header/section-header/section-header.component";

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.scss'
})
export class BlogPostsComponent {
  sectionName = input<string>()
}
