import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled">
      <div class="nav-logo">NK</div>
      <div class="nav-links">
        <a *ngFor="let link of links"
           [href]="link.href"
           [class.active]="activeSection === link.id"
           (click)="scrollTo($event, link.href)">
          {{ link.label }}
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  activeSection = '';

  links = [
    { href: '#skills',     id: 'skills',     label: 'Skills'     },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#projects',   id: 'projects',   label: 'Projects'   },
    { href: '#about',      id: 'about',      label: 'About'      },
    { href: '#contact',    id: 'contact',    label: 'Contact'    }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) this.activeSection = s.id;
    });
  }

  ngOnInit(): void { this.onScroll(); }
  ngOnDestroy(): void {}

  scrollTo(e: Event, href: string): void {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
