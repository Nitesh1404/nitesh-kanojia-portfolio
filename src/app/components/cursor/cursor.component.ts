import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor" [style.left.px]="cx" [style.top.px]="cy"
         [class.hovered]="hovered"></div>
    <div class="cursor-trail" [style.left.px]="tx" [style.top.px]="ty"></div>
  `,
  styles: [`
    .cursor {
      position: fixed; width: 12px; height: 12px;
      background: var(--cyan); border-radius: 50%;
      pointer-events: none; z-index: 9999;
      transform: translate(-50%, -50%);
      transition: transform 0.1s, width 0.2s, height 0.2s, background 0.2s;
      mix-blend-mode: screen;
    }
    .cursor.hovered {
      transform: translate(-50%, -50%) scale(2.5);
      background: var(--green);
    }
    .cursor-trail {
      position: fixed; width: 36px; height: 36px;
      border: 1px solid rgba(0,200,255,0.4); border-radius: 50%;
      pointer-events: none; z-index: 9998;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
    }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  cx = 0; cy = 0;
  tx = 0; ty = 0;
  hovered = false;
  private mx = 0; private my = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private unlisteners: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.unlisteners.push(
      this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
        this.mx = e.clientX; this.my = e.clientY;
        this.cx = e.clientX; this.cy = e.clientY;
      })
    );

    this.intervalId = setInterval(() => {
      this.tx += (this.mx - this.tx) * 0.12;
      this.ty += (this.my - this.ty) * 0.12;
    }, 16);

    // Hover effect on interactive elements
    const onEnter = () => this.hovered = true;
    const onLeave = () => this.hovered = false;
    this.unlisteners.push(
      this.renderer.listen('document', 'mouseover', (e: MouseEvent) => {
        const el = e.target as HTMLElement;
        if (el.closest('a, button')) this.hovered = true;
      }),
      this.renderer.listen('document', 'mouseout', (e: MouseEvent) => {
        const el = e.target as HTMLElement;
        if (el.closest('a, button')) this.hovered = false;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    this.unlisteners.forEach(u => u());
  }
}
