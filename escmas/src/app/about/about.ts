import { Component } from '@angular/core';
import { CommentService } from '../serives/comment.service';
import { Serivedashboard } from '../serives/serivedashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
   dishes: any[] = [];
constructor(private serivedashboard:Serivedashboard){
this.dishes=this.serivedashboard.getDishes();
}
}
