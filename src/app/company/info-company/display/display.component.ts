
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/Company';
import { HttpClientService } from 'src/app/service/http-client.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  certificate: any;

  @Input()
  Copanytion: Company;
  @Output()
  ProfileDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
  ) { }

  ngOnInit() {
  }

  deleteCertification() {
    this.httpClientService.deleteCompany(this.Copanytion.id).subscribe(
      (Copanytion) => {
        this.ProfileDeletedEvent.emit();
        this.router.navigate(['company', 'Experience'], { queryParams: { action: 'edit', id: this.Copanytion.id } });
      }
    );
  }

  editCertification() {
    this.router.navigate(['company', 'Experience'], { queryParams: { action: 'edit', id: this.Copanytion.id } });
  }

 }