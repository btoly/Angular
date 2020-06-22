import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/Company';



@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

 
  @Input()
  companys: Company;

  @Output()
companyAddedEvent = new EventEmitter();


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


  savecompany() {
    if (this.companys.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/api/auth/uploadimages', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.companys.user = { 'id':this.user['id']};
          this.companys.addby = this.user['name'];
          this.httpClientService.createaddCpmpany(this.companys).subscribe(
            (companys) => {
              this.companyAddedEvent.emit();
              this.router.navigate(['company', 'Experience']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
    } else {
      this.companys.user = { 'id':this.user['id']};
      this.httpClientService.updateCpmpany(this.companys).subscribe(
        (companys) => {
          this.companyAddedEvent.emit();
          this.router.navigate(['company', 'Experience']);
        }
      );
    }

  }

}