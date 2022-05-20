import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoggedIn=true
signUpForm!: FormGroup;
  constructor(private authService:AuthServiceService ) { }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLoggedIn==!this.isLoggedIn

    
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }

    const email=form.value.email;
    const password=form.value.password;

  // this.authService.signUpForm(email,password);
    
    form.reset();
  }

}
