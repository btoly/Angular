import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from 'src/app/auth/signup-info';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  users: Array<SignUpInfo>;
  selectedUser: SignUpInfo;
  action: string;

 cp: number = 1;
 total: number = 0;



  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.refreshData();
  }

  
  refreshData() {
  

    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );



    this.activatedRoute.queryParams.subscribe(
      (params) => {
     
        this.action = params['action'];
        const selectedUserId = params['id'];
      
          
    
        if (selectedUserId) {
          this.selectedUser = this.users.find(user => user.id === +selectedUserId);
        }
      }
 
    );
  }

  isRoleComany(user: any)
  {
    for(const role of user.roles) {
      if(role.name == 'ROLE_COMPANY')
        return true;
    }
    return false;
  }

  handleSuccessfulResponse(response) {
    this.users = response;
    this.total=response.lenght;
  }

  viewUser(id: number) {
    this.router.navigate(['Business','U'], {queryParams : {id, action: 'view'}});
  }




 
}