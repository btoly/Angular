import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/Profile';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  
  @Input()
  profile: Profile;

  @Output()
  bookAddedEvent = new EventEmitter();


  private selectedFile;
  imgURL: any;
  user: any;
 


  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUserByName();
  }


  public getUserByName() {
    const userName = sessionStorage.getItem('AuthUsername');
    
    const url = `http://localhost:8080/api/auth/User/userName/${userName}`;
    this.httpClient.get(url).subscribe(res => {
      this.user = res;
    })
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


  saveProfile() {
    if (this.profile.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/api/auth/uploadimages', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.profile.user = { 'id':this.user['id']};
          this.httpClientService.addProfile(this.profile).subscribe(
            (profile) => {
              this.bookAddedEvent.emit();
              this.router.navigate(['admin', 'books']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
    } else {
      this.profile.user = { 'id':this.user['id']};
      this.httpClientService.updateProfile(this.profile).subscribe(
        (profile) => {
          this.bookAddedEvent.emit();
          this.router.navigate(['admin', 'books']);
        }
      );
    }

  }

}
