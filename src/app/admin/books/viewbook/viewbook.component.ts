import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Profile } from 'src/Profile';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  @Input()
  profile: Profile;
  @Output()
  ProfileDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
  ) { }

  ngOnInit() {
  }

  deleteProfile() {
    this.httpClientService.deleteProfile(this.profile.id).subscribe(
      (profile) => {
        this.ProfileDeletedEvent.emit();
        this.router.navigate(['admin', 'books']);
      }
    );
  }

  editProfile() {
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'edit', id: this.profile.id } });
  }

}

