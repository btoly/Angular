import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[];
  public authority: string;
  info: any;
  constructor(private tokenStorage: TokenStorageService,  private token: TokenStorageService) { }


  logout() {
    this.token.signOut();
    window.location.reload();
  }


  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),

      authorities: this.token.getAuthorities()
    }; 
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        else if (role === 'ROLE_COMPANY') {
          this.authority = 'company';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
