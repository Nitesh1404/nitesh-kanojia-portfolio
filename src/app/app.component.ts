import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorComponent } from './components/cursor/cursor.component';
import { ParticleBgComponent } from './components/particle-bg/particle-bg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursorComponent, ParticleBgComponent],
  template: `
    <app-particle-bg />
    <app-cursor />
    <div class="wrap">
      <router-outlet />
    </div>
  `,
  styles: [`
    .wrap {
      position: relative;
      z-index: 2;
    }
  `]
})
export class AppComponent {}
