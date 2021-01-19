import { Component, OnInit } from '@angular/core';
import {Usager} from "../../models/usager.model";

@Component({
  selector: 'app-usager',
  templateUrl: './usager.component.html',
  styleUrls: ['./usager.component.css']
})
export class UsagerComponent implements OnInit {

  usagers: Array<Usager> = new Array<Usager>();

  constructor() { }

  ngOnInit(): void {

    let usager1: Usager = new Usager();
    usager1.nom = "Imad";
    usager1.an = new Date("2019-01-16");
    usager1.h = false;
    usager1.pt = "D";
    usager1.fct = "Etudiant";

    let usager2: Usager = new Usager();
    usager2.nom = "Alae";
    usager2.an = new Date("2019-01-15");
    usager2.h = false;
    usager2.pt = "D";
    usager2.fct = "Etudiant";
    this.usagers.push(usager1);
    this.usagers.push(usager2);
  }

}
