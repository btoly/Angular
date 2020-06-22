

import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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

  }
  