import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  @Input()
  user: SignUpInfo

  @Output()
  userDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {}








  editUser(user: any) { 


    for(const role of user.roles) {


      if (role.name == 'ROLE_PM'){
 this.router.navigate(['Individuals', 'U'], { queryParams: { action: 'edit', id: this.user.id } });
}
else if (role.name == 'ROLE_USER') {

  this.router.navigate(['Edution', 'U'], { queryParams: { action: 'edit', id: this.user.id } });
}

else if 
(role.name == 'ROLE_COMPANY'){
  this.router.navigate(['Business', 'U'], { queryParams: { action: 'edit', id: this.user.id } });
}

}
    //كل مره تغيرر 

  }

  deleteUser(user: any) {
    for(const role of user.roles) {
    if (role.name == 'ROLE_COMPANY'){
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.userDeletedEvent.emit();
        this.router.navigate(['Business', 'U']);
      }
    );
  }
  else if  (role.name == 'ROLE_USER'){
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.userDeletedEvent.emit();
        this.router.navigate(['Edution', 'U']);
      }
    );
  }

  if (role.name == 'ROLE_PM'){
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.userDeletedEvent.emit();
        this.router.navigate(['Individuals', 'U']);
      }
    );
  }



  }

}

  





}