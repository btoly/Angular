import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-register',
  templateUrl: './select-register.component.html',
  styleUrls: ['./select-register.component.css']
})
export class SelectRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  @Input() massameg: string;

//  btnClick(){
//   this.router.navigate(['/form']);

 
//  }
}
