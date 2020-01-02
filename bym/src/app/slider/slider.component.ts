import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers:[NgbCarouselConfig,NgbCarousel,AnimateOnScrollModule]
})
export class SliderComponent implements OnInit  {
  images = ["../assets/building.jpg","../assets/socios.jpg","../assets/lentes.jpg"]
  constructor(config:NgbCarouselConfig){ 
    
      config.wrap =true;
      config.keyboard=false;
      config.pauseOnHover=false;
  }
  ngOnInit() {
  }
}
