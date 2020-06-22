
import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register-admain',
  templateUrl: './register-admain.component.html',
  styleUrls: ['./register-admain.component.css']
})
export class RegisterAdmainComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';



    
  @Input()
  user: SignUpInfo;

  @Output()
  AddedEvent = new EventEmitter();

  constructor(private authService: AuthService,private httpClientService: HttpClientService,private router: ActivatedRoute) { }


  get state() : boolean{
    if (this.user.id == null ) {
      return true;
    }
    else 
    return false;
  }





  EDite() {

      this.httpClientService.updateUser(this.user
        ).subscribe(
        (user) => {
          this.AddedEvent.emit();
         // this.router.navigate(['admin', 'users']);
        }
      );}




  





  
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
  