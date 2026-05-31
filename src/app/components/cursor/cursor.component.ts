import {
  Component, OnInit, OnDestroy, Renderer2, NgZone, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor"
         [style.left.px]="cx"
         [style.top.px]="cy"
         [class.hovered]="hovered"></div>
    <div class="cursor-trail"
         [style.left.px]="tx"
         [style.top.px]="ty"></div>
  `,
  styles: [`
    .cursor {
      position: fixed;
      width: 12px; height: 12px;
      background: var(--cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, background 0.2s;
      mix-blend-mode: screen;
    }
    .cursor.hovered {
      transform: translate(-50%, -50%) scale(2.5);
      background: var(--green);
    }
    .cursor-trail {
      position: fixed;
      width: 36px; height: 36px;
      border: 1px solid rgba(0, 200, 255, 0.4);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
    }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  cx = -100; cy = -100;   // start offscreen
  tx = -100; ty = -100;
  hovered = false;

  private mx = -100; private my = -100;
  private rafId = 0;
  private unlisteners: (() => void)[] = [];

  constructor(
    private renderer: Renderer2,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Run mousemove INSIDE zone so Angular binding updates cx/cy instantly
    this.unlisteners.push(
      this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
        this.cx = e.clientX;
        this.cy = e.clientY;
        this.mx = e.clientX;
        this.my = e.clientY;
      })
    );

    // Run the trail lerp OUTSIDE zone (no change detection on every frame)
    // but call cdr.detectChanges() manually to update the trail binding
    this.zone.runOutsideAngular(() => {
      const loop = () => {
        this.tx += (this.mx - this.tx) * 0.12;
        this.ty += (this.my - this.ty) * 0.12;
        this.cdr.detectChanges();          // push trail coords to DOM
        this.rafId = requestAnimationFrame(loop);
      };
      this.rafId = requestAnimationFrame(loop);
    });

    // Hover detection
    this.unlisteners.push(
      this.renderer.listen('document', 'mouseover', (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button')) {
          this.hovered = true;
        }
      }),
      this.renderer.listen('document', 'mouseout', (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button')) {
          this.hovered = false;
        }
      })
    );

    // Hide cursor dots when mouse leaves window
    this.unlisteners.push(
      this.renderer.listen('document', 'mouseleave', () => {
        this.cx = -100; this.cy = -100;
        this.tx = -100; this.ty = -100;
      })
    );
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
    this.unlisteners.forEach(u => u());
  }
}