import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule, ApexNonAxisChartSeries } from 'ng-apexcharts';
import { LoadingComponent } from '../loading/loading'; // Path-ai correct-ah check pannunga

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, LoadingComponent],
  templateUrl: './donut-chart.html'
})
export class DonutChart implements OnInit {
  public isLoading: boolean = true;

  // Chart Data (Inga thaan donutLabels irukanum)
  public donutSeries: ApexNonAxisChartSeries = [220, 20, 30, 12, 32];
  public donutLabels = ["Students", "Teaching", "Non-Teaching", "Management", "Chairman"];

  ngOnInit(): void {
    // 2 seconds spinner kaatum, appuram chart varum
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}