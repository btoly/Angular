import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/Certification';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment'
@Component({
  selector: 'app-information-studant',
  templateUrl: './information-studant.component.html',
  styleUrls: ['./information-studant.component.css']
})
export class InformationStudantComponent implements OnInit {
  Certifications: Array<Certification>;
  CertificationRecieved: Array<Certification>;
  selectedCertification: Certification;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }
  private Certificationsearch = new Certification();  

  form = new FormGroup({  
    name : new FormControl() 
  }); 
  
  searchForm(searchInfo)  
  {  

if (this.Name.value != ""){
  this.httpClientService.getccertificationyusername(this.Certificationsearch.username= this.Name.value).subscribe(
    response => {
      this.handleSuccessfulResponse(response);
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
    this.httpClientService.getCertificationAddBy().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
       
        this.action = params['action'];

	const id = params['id'];

        if (id) {
          this.selectedCertification = this.Certifications.find(certifications => {
            return certifications.id === +id;
          });
        }
      }
    );
  }
 
  handleSuccessfulResponse(certification) {
    this.Certifications = [];
    if(certification){
    this.Certifications = new Array<Certification>();
    
    for(const Certifications of certification)
    {
    let ProfileswithRetrievedImageField:Certification = new Certification();

      ProfileswithRetrievedImageField.id = Certifications.id;
      ProfileswithRetrievedImageField.universityname = Certifications.universityname;
      //populate retrieved image field so that profile image can be displayed
      ProfileswithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + Certifications.picByte;

      ProfileswithRetrievedImageField.addby = Certifications.addby;
      Certifications.date =moment(Certifications.date).format('DD MMM YYYY ');
      ProfileswithRetrievedImageField.date = Certifications.date;
      ProfileswithRetrievedImageField.magor = Certifications.magor;
      
      ProfileswithRetrievedImageField.gap = Certifications.gap;

      ProfileswithRetrievedImageField.degree = Certifications.degree;
      ProfileswithRetrievedImageField.username = Certifications.username;
      ProfileswithRetrievedImageField.picByte=Certifications.picByte;

      this.Certifications.push(ProfileswithRetrievedImageField);
    
      
  }}}

  



  addCertification(){
    this.selectedCertification = new Certification();
    this.router.navigate(['pm', 'Studants'], { queryParams: { action: 'add' } });
  }
  
  viewProfiles(id: number) {
    this.router.navigate(['pm', 'Studants'], { queryParams: { id, action: 'view' } });
  }
  
}

  
