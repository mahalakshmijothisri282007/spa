import { Component } from '@angular/core';
import { CommentService } from '../serives/comment.service';
import { Serivedashboard } from '../serives/serivedashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
dishes: any[] = [];
constructor(private serivedashboard:Serivedashboard){
this.dishes=this.serivedashboard.getDishes();
}
}