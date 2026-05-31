import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent }     from '../../components/navbar/navbar.component';
import { HeroComponent }       from '../../components/hero/hero.component';
import { SkillsComponent }     from '../../components/skills/skills.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent }   from '../../components/projects/projects.component';
import { AboutComponent }      from '../../components/about/about.component';
import { ContactComponent }    from '../../components/contact/contact.component';
import { FooterComponent }     from '../../components/footer/footer.component';

import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar />

    <app-hero       [data]="data" />
    <div class="glow-line"></div>

    <app-skills     [data]="data" />
    <div class="glow-line"></div>

    <app-experience [data]="data" />
    <div class="glow-line"></div>

    <app-projects   [data]="data" />
    <div class="glow-line"></div>

    <app-about      [data]="data" />
    <div class="glow-line"></div>

    <app-contact    [data]="data" />

    <app-footer />
  `
})
export class HomeComponent {
  // ✏️ All portfolio content comes from this single data object
  readonly data = PORTFOLIO_DATA;
}
