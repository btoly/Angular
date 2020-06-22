import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



form: any = {};
signupInfo: SignUpInfo;
isSignedUp = false;
isSignUpFailed = false;
errorMessage = '';

constructor(private authService: AuthService) { }

ngOnInit() { }

onSubmit() {
console.log(this.form);

this.signupInfo = new SignUpInfo(
this.form.name,
this.form.username,
this.form.email,
this.form.password,
this.form.father_Name ,
this.form.grandfather_name ,
this.form.last_name ,
this.form.phone,
this.form.select_role,
);

this.authService.signUp(this.signupInfo).subscribe(
data => {
console.log(data);
this.isSignedUp = true;
this.isSignUpFailed = false;
},
error => {
console.log(error);
this.errorMessage = error.error.message;
this.isSignUpFailed = true;
}
);
}
}
