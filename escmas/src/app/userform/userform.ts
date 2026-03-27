import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  imports: [ReactiveFormsModule],
  templateUrl: './userform.html',
  styleUrl: './userform.css',
})
export class Userform {
userForm :FormGroup;
constructor(private fb:FormBuilder){
  this.userForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required]
  });
}
onSubmit(){
  console.log(this.userForm.value);
}
}