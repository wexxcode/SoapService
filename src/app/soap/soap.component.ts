import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

import { NgxXml2jsonService } from 'ngx-xml2json';
import { parse } from 'url';



@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.css']
})
export class SoapComponent implements OnInit {

  dados ?: Object;
 
  constructor(private apiService: ApiService, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {
    this
      .apiService
      .getData()
      .subscribe(dados => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(dados, 'text/xml');
        this.dados = this.ngxXml2jsonService.xmlToJson(xml);
        console.log(this.dados);     
    }, erro => {
      console.log('Erro' + erro)
    }
    );
  }

}
