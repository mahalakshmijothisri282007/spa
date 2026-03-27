import { Routes } from '@angular/router';
import { DonutChart } from './donut-chart/donut-chart';

export const routes: Routes = [
  { path: 'stats', component: DonutChart },
  { path: '', redirectTo: '/stats', pathMatch: 'full' }
];