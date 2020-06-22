
import { Component, OnInit } from '@angular/core';

import { HttpClientService } from 'src/app/service/http-client.service';

import { Certification } from 'src/app/Certification';
import { Company } from 'src/app/Company';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  companyCounter: any = 0
  educationCounter : any = 0;
  certificate: any;
  compane: any;
  Certifications: Array<Certification>;
  Companys: Array<Company>;
  certificateList: any = [];
  CompanyList: any = [];
  constructor(private httpClientService: HttpClientService) { }

    ngOnInit() {
      this.httpClientService.getCertificateDetailsForUser().subscribe(
        response => this.handleSuccessfulResponse(response),
      );

      this.httpClientService.getCompanyByUserIdDetailsForUser().subscribe(
        responseComany => this.handleSuccessfulResponseCompany(responseComany),
      );
    }
  
    handleSuccessfulResponse(response) {
      this.Certifications = response;
    }



    handleSuccessfulResponseCompany(responseComany) {
      this.Companys = responseComany;
    }




  getDetails()
  {
    this.educationCounter=1;
    this.companyCounter=0;
    this.httpClientService.getCertificateDetailsForUser().subscribe(res => {
      this.certificateList = res;
      for(let cert of this.certificateList){
      if(cert&& cert['picByte'])
        cert['retrievedImage'] = 'data:image/jpeg;base64,' + cert['picByte'];
      console.log(cert);
      }
    })
    
  }

  getDetailsCompany(){
    this.educationCounter=0;
    this.companyCounter=1;
      this.httpClientService.getCompanyByUserIdDetailsForUser().subscribe(cmp => {
        this.CompanyList = cmp;
        for(let COM of this.CompanyList){
        if(COM && COM['picByte'])
        COM['retrievedImage'] = 'data:image/jpeg;base64,' + COM['picByte'];
        console.log(COM);
        }
      })
  }


  isEmpty(){ 
    return this.certificateList.length > 0;
  }
  isEmptyCOMANY(){ 
    return this.CompanyList.length > 0;
  }


}