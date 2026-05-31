import { Routes } from '@angular/router';

// Single-page portfolio — all sections on one route.
// Add new pages here in the future e.g. blog, case-studies.
export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: '**', redirectTo: '' }
];
