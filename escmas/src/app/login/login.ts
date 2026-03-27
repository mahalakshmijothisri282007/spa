import { Component } from '@angular/core';
import { CommentService } from '../serives/comment.service';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
// logInForm!:FormGroup;
// constructor(private formBuilder:FormBuilder){
//   this.logInForm = this.FormBuilder.group({
//     userEmail:[''],
//     userPassword:['']
//   })
// }
// onSubmit(){
//   console.log(this.logInForm.value);
// }
}

