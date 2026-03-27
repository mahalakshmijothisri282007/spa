import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-good',
  imports: [CommonModule],
  templateUrl: './good.html',
  styleUrl: './good.css',
})
export class Good {
 product:any[]=[];
 prouductUrl="https://dummyjson.com/products"
 constructor(private http:HttpClient){
  this.http.get<any>(this.prouductUrl).subscribe((res)=>{
    console.log(res);
    this.product=res.products;
});
}
}