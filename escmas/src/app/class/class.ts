import { Component } from '@angular/core';
import { CommentService } from '../serives/comment.service';
import { Serivedashboard } from '../serives/serivedashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class',
  imports: [CommonModule],
  templateUrl: './class.html',
  styleUrl: './class.css',
})
export class Class {
 dishes: any[] = [];
constructor(private serivedashboard:Serivedashboard){
this.dishes=this.serivedashboard.getDishes();
}
}