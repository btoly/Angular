import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.css']
})
export class SliderImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/imam.jpg', '../../assets/proof.jpg', '../../assets/work.jpeg'];
}
 