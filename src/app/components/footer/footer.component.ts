import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div>NITESH KANOJIA · SOFTWARE DEVELOPER</div>
      <div class="footer-made">Crafted with <span>precision</span> · Mumbai, India</div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 30px 60px;
      border-top: 1px solid var(--border);
      display: flex; justify-content: space-between; align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px; color: var(--muted);
      position: relative; z-index: 2;
    }
    .footer-made { color: rgba(232,244,255,0.3); }
    .footer-made span { color: var(--cyan); }

    @media (max-width: 768px) {
      footer { flex-direction: column; gap: 12px; text-align: center; }
    }
  `]
})
export class FooterComponent {}
