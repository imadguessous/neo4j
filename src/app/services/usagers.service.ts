import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Usager} from "../models/usager.model";

@Injectable({
  providedIn: 'root'
})
export class UsagersService {
  host = environment.url
  usagers : Array<Usager>;
  constructor(private http: HttpClient) {
  }

  initUsagers(): Array<Usager>{
    this.usagers = new Array<Usager>();
    let usager1: Usager = new Usager();
    usager1.id = 1;
    usager1.nom = "Imad";
    usager1.an = new Date("1999-06-16");
    usager1.h = false;
    usager1.pt = "TAXI";
    usager1.fct = "ETUDIANT";

    let usager2: Usager = new Usager();
    usager2.id  = 2;
    usager2.nom = "Aymane";
    usager2.an = new Date("1998-03-14");
    usager2.h = false;
    usager2.pt = "BUS";
    usager2.fct = "SALARIE";
    this.usagers.push(usager1);
    this.usagers.push(usager2);

    return this.usagers;
  }
  getUsagers() {
    return this.http.get(this.host + "/users");
  }

  addUsager(value) {
    return this.http.post(this.host + "/users", value);
  }

  getUsager(cin) {

    return this.http.get(this.host + "/users/" + cin);
  }

  updateUsager(value) {
    return this.http.post(this.host + "/users/" + value.cin, value);
  }

  deleteUsager(cin) {

    return this.http.delete(this.host + "/users/" + cin);
  }

  getUsagersFonctions(): Array<string>{
    return new Array<string>("ETUDIANT","SALARIE","LIBERAL","RETRAITE","FONCTIONNAIRE");
  }


}
