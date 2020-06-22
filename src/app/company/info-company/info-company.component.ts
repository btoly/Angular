import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/Company';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment'
@Component({
  selector: 'app-info-company',
  templateUrl: './info-company.component.html',
  styleUrls: ['./info-company.component.css']
})
export class InfoCompanyComponent implements OnInit {

  company: Array<Company>;
  CompanyRecieved: Array<Company>;
  selectedCompany: Company;
  action: string;



  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,  
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }


  private companysearch = new Company();  

  form = new FormGroup({  
    name : new FormControl() 
  }); 
  
  searchForm(searchInfo)  
  {  

if (this.Name.value != ""){
  this.httpClientService.getcompanyByusername(this.companysearch.username= this.Name.value).subscribe(
    response => {
      let companyList: any = [];
      companyList.push(response);
      this.handleSuccessfulResponse(companyList);
    }
  );
}

if (this.Name.value==""){
  this.ngOnInit() ;
}

  }  

 get Name()  
  {  
    return this.form.get('name');  
  }  






  

  refreshData() {
    this.httpClientService.getCompanyByUserIdAndAddBy().subscribe(
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
          this.selectedCompany = this.company.find(company => {
            return company.id === +id;
          });
        }
      }
    );
  }

  // we will be taking the profiles response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(companies) { 
    this.company = [];

    if(companies) {
    this.company = new Array<Company>();
    
    for(const company of companies)
    {
      let ProfileswithRetrievedImageField : Company = new Company();

      ProfileswithRetrievedImageField.id = company.id;
      ProfileswithRetrievedImageField.comanyName = company.comanyName;
        //populate retrieved image field so that profile image can be displayed
  ProfileswithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + company.picByte;



    


    ProfileswithRetrievedImageField.addby = company.addby;




      company.startDate =moment(company.startDate).format('DD MMM YYYY ');
      ProfileswithRetrievedImageField.startDate = company.startDate;

      company.endDate =moment(company.endDate).format('DD MMM YYYY ');
      ProfileswithRetrievedImageField.endDate = company.endDate;
      company.endDate = new Date().toLocaleDateString();

      ProfileswithRetrievedImageField.e_position = company.e_position;
    ProfileswithRetrievedImageField.username = company.username;


//id_user get 

      this.company.push(ProfileswithRetrievedImageField);
    }
    }
    
    
  }

  



  createaddCpmpany(){
    this.selectedCompany = new Company();
    this.router.navigate(['company', 'Experience'], { queryParams: { action: 'add' } });
  }
  
  viewProfiles(id: number) {
    this.router.navigate(['company', 'Experience'], { queryParams: { id, action: 'view' } });
  }
  



}

  
