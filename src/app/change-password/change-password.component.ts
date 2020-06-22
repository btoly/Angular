import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  passwordForm = new FormGroup ({
    pass: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    repassword: new FormControl('',[
      Validators.required,
    ])

  })

  
  password: string ='';
  confirmPassword:string='';
  token: string = '';
  passwordChanged: boolean = false;
  registerForm: FormGroup
  constructor(
  private activatedRoute: ActivatedRoute,
public httpClientService: HttpClientService, 
private router: Router) 
{}












  ngOnInit(): void {

  
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.token = params['token'];
        console.log(this.token);
      }
    );


  }



  updatePassword()
  {
    if(this.password === this.confirmPassword)
    {
      
        
        this.httpClientService.resetUserPassword(this.password, this.token).subscribe(res => {
          console.log(res);
          if(res['status'] === 'SUCCESS')
          {
              this.passwordChanged = true;
          }

    });
  }
}

navigateToHome(){
  this.router.navigate(['auth/login']);
}

}
