import { Component, OnInit } from '@angular/core';

import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/Profile';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Profiles: Array<Profile>;
  ProfileRecieved: Array<Profile>;
  selectedProfile: Profile;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getProfile().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
	// get the parameter id. this will be the id of the profile whose details 
	// are to be displayed when action is view.
	const id = params['id'];
	// if id exists, convert it to integer and then retrive the profile from
	// the profiles array
        if (id) {
          this.selectedProfile = this.Profiles.find(profiles => {
            return profiles.id === +id;
          });
        }
      }
    );
  }

  // we will be taking the profiles response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {


    this.Profiles = new Array<Profile>();
    //get profiles returned by the api call
    this.ProfileRecieved = response;
    for (const profile of this.ProfileRecieved) {
    
    
      const ProfileswithRetrievedImageField =  new Profile();
   
      ProfileswithRetrievedImageField.id = profile.id;
      ProfileswithRetrievedImageField.name = profile.name;
      //populate retrieved image field so that profile image can be displayed
      ProfileswithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + profile.picByte;



      

      ProfileswithRetrievedImageField.nationalIdentity = profile.nationalIdentity;
      ProfileswithRetrievedImageField.universitytype = profile.universitytype;
      ProfileswithRetrievedImageField.picByte=profile.picByte;
//id_user get 

      this.Profiles.push(ProfileswithRetrievedImageField);
    }
  }

  addProfile(){
    this.selectedProfile = new Profile();
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'add' } });
  }

  viewProfiles(id: number) {
    this.router.navigate(['admin', 'books'], { queryParams: { id, action: 'view' } });
  }


  
}

  
