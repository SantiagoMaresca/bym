import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule,MatCardModule,MatOptionModule,MatSelectModule,MatInputModule,MatIconModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbCarouselConfig, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MDBBootstrapModule ,MdbIconComponent} from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import {ServiceService} from './controller/service.service';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,MdbIconComponent
  ],
  imports: [
    BrowserModule,NgbModule, HttpClientModule , ReactiveFormsModule,AnimateOnScrollModule.forRoot(),FormsModule,AnimateOnScrollModule.forRoot(),MatFormFieldModule,MatOptionModule,MatIconModule, MatInputModule,MatSelectModule,AppRoutingModule ,MatButtonModule,MatToolbarModule, BrowserAnimationsModule,RouterModule,CarouselModule.forRoot(),MatCardModule
  ],
  providers: [NgbCarouselConfig,NgbCarousel,ServiceService],
  bootstrap: [AppComponent,SliderComponent]
})


export class AppModule { }
