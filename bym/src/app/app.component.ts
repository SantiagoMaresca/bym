import { Component, OnInit  } from '@angular/core';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ServiceService } from './controller/service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import {URL } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {

  ContactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
   ) { }
  title = 'bym';

  ngOnInit() {
   
    this.ContactForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      mensaje: new FormControl('')}
      )}

      
    async sendContact(frmPub) {
      
      //alert(data);
        alert("Consulta Enviada con éxito! Aguarde nuestra respuesta!");
        let message = 
          {
            asunto : "B&M: Nueva consulta",
            to : 'santiago.maresca26@gmail.com',
            mensaje: frmPub.value["name"] +" te ha enviado: "+frmPub.value["mensaje"] + '\nContestar al mail '+frmPub.value["email"]
         
        }
        //alert(message.asunto +message.mensaje+message.to)
        await this.service.postResource(URL.API_URL+'/api/sendEmail',message);
 
      }
    }


  
    


    
  


  

