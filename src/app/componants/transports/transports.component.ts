import { Component, OnInit } from '@angular/core';
import {Transport} from "../../models/Transport.model";

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {
  t:Transport=new Transport();

  constructor() { }
  transports:Array<Transport>=[];
  ngOnInit(): void {
     this.t.type="voiture"
    this.t.num=15
this.t.vitesse=220
    this.t.capacity=5
    this.t.PdC="Permis"
    this.t.prix=15;
     this.transports.push(this.t);


  }


}
