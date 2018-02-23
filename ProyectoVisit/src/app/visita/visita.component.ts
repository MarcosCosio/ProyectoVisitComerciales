import { Component, OnInit } from '@angular/core';
import {Visita} from '../visita';
import { FormGroup, FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent implements OnInit {

chk = new FormGroup({
  chk1: new FormControl(),
})
  visita: Visita=
  {
    nom:'',
    cargo:'',
    emp:'',
    mail:'',
    tel:null,
    chk1:'',
    chk2:'',
    chk3:'',
    obs:'',
  }
  constructor() { }
  //ngOnInit para la logica de inicializacion
  ngOnInit() {
  }


}
