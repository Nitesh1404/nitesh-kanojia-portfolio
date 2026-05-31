import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData } from '../../models/portfolio.model';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @Input() data!: PortfolioData;
  constructor(private reveal: RevealService) {}
  ngAfterViewInit(): void { this.reveal.observe(); }
  ngOnDestroy(): void { this.reveal.disconnect(); }
}
