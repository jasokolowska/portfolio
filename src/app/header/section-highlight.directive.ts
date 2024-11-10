import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSectionHighlight]',
  standalone: true
})
export class SectionHighlightDirective implements OnInit, OnDestroy {
  @Input('appSectionHighlight') linkId!: string;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navLinkElement = document.getElementById(this.linkId+'-nav')
          if (entry.isIntersecting) { 
            navLinkElement?.focus()
            history.pushState(null, '', `#${this.linkId}`);
          }
        });
      },
      { threshold: 0.3 } 
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
