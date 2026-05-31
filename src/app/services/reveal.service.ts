// ============================================================
//  RevealService
//  Observes .reveal elements inside any component and adds
//  the .visible class when they enter the viewport.
//  Each component calls observe() in ngAfterViewInit and
//  disconnect() in ngOnDestroy.
// ============================================================
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RevealService {
  private observer: IntersectionObserver | null = null;

  observe(): void {
    // Use a small timeout so Angular finishes rendering first
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal:not(.visible)');
      if (!elements.length) return;

      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach(el => this.observer!.observe(el));
    }, 50);
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
