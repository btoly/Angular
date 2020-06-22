import { Component, OnInit ,Input} from '@angular/core';
import { SignUpInfo } from '../auth/signup-info';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  users: Array<SignUpInfo>;
  selectedUser: SignUpInfo;
  action: string;


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

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  viewUser(id: number) {
    this.router.navigate(['A','U'], {queryParams : {id, action: 'view'}});
  }

  

 
}
