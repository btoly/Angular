import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent  {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  loginForm: FormGroup;
  error_messages = {

    'Input_national_ID': [
      { type: 'required', message: 'مطلوب ' },
    ],

    'InputFamily': [
      { type: 'required', message: 'مطلوب.' },
    ],

    'InputFhther': [
      { type: 'required', message: 'مطلوب' },
    ],

    'Input_Frist_Name': [
      { type: 'required', message: 'مطلوب' },
    ],


    'Inputgrandfather': [
      { type: 'required', message: 'مطلوب' }
    ],

    'InputEmail1': [
      { type: 'required', message: 'مطلوب' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'ادخل بريد الكتروني صالح' }
    ],

    'password': [
      { type: 'required', message: 'مطلوب' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'مطلوب' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  }

  constructor(public formBuilder: FormBuilder,private authService: AuthService)
     {
    this.loginForm = this.formBuilder.group({

      Input_Frist_Name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      InputFhther: new FormControl('', Validators.compose([
        Validators.required
      ])),

      Inputgrandfather : new FormControl('', Validators.compose([
        Validators.required
      ])),


      InputFamily: new FormControl('', Validators.compose([
        Validators.required
      ])),

      Input_national_ID: new FormControl('', Validators.compose([
        Validators.required
      ])),
      InputEmail1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };




  }



}


