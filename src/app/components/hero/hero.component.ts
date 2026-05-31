import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData, Stat } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() data!: PortfolioData;
  @ViewChildren('statNum') statNums!: QueryList<ElementRef<HTMLElement>>;

  private observer!: IntersectionObserver;
  private statsObserver!: IntersectionObserver;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Stats counter animation
    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) {
      this.statsObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.statNums.forEach((ref, i) => {
              const stat = this.data.stats[i];
              this.animateCounter(ref.nativeElement, stat.value, stat.decimal);
            });
            this.statsObserver.disconnect();
          }
        });
      }, { threshold: 0.5 });
      this.statsObserver.observe(statsEl as Element);
    }
  }

  private animateCounter(el: HTMLElement, target: number, decimal?: string): void {
    const duration = 1800;
    const startTime = performance.now();
    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (decimal && progress < 1) {
        el.textContent = (parseFloat(decimal) * eased).toFixed(2);
      } else {
        el.textContent = Math.round(target * eased).toLocaleString();
      }
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = decimal ?? target.toLocaleString();
    };
    requestAnimationFrame(update);
  }

  scrollTo(href: string): void {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.statsObserver?.disconnect();
  }
}
