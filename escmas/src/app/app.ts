import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-dark bg-primary shadow-sm">
      <div class="container">
        <span class="navbar-brand mb-0 h1">College Dashboard</span>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App {}