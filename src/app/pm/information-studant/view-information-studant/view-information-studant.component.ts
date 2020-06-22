import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Certification } from 'src/app/Certification';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-information-studant',
  templateUrl: './view-information-studant.component.html',
  styleUrls: ['./view-information-studant.component.css']
})
export class ViewInformationStudantComponent implements OnInit {

  certificate: any;

  @Input()
  certification: Certification;
  @Output()
  ProfileDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
  ) { }

  ngOnInit() {
  }

  deleteCertification() {
    this.httpClientService.deleteCertification(this.certification.id).subscribe(
      (certification) => {
        this.ProfileDeletedEvent.emit();
        this.router.navigate(['pm', 'Studants'], { queryParams: { action: 'edit', id: this.certification.id } });
      }
    );
  }

  editCertification() {
    this.router.navigate(['pm', 'Studants'], { queryParams: { action: 'edit', id: this.certification.id } });
  }

 }