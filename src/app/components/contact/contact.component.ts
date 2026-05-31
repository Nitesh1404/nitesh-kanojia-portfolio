import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData } from '../../models/portfolio.model';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @Input() data!: PortfolioData;
  constructor(private reveal: RevealService) {}
  ngAfterViewInit(): void { this.reveal.observe(); }
  ngOnDestroy(): void { this.reveal.disconnect(); }
}
