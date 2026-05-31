import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData } from '../../models/portfolio.model';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @Input() data!: PortfolioData;
  constructor(private reveal: RevealService) {}
  ngAfterViewInit(): void { this.reveal.observe(); }
  ngOnDestroy(): void { this.reveal.disconnect(); }
}
