import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
email: string ='' ;
userFound: boolean = false;
userNOTFound: boolean = false;



  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }


  ResetPassword() {
 console.log(this.email) ;

    this.httpClientService.processForgotPasswordForm(this.email).subscribe((res) => {
      console.log(res);
      if(res['status'] === 'SUCCESS')
      {
        console.log("success");
        this.userFound = true;
      }
      else {
        console.log("error")
        this.userNOTFound = true;
;      }
    });

  }

  navigateToHome(){
    this.router.navigate(['auth/login']);
  }

}