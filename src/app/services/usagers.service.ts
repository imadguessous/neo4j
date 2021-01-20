import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsagersService {
  host = environment.url

  constructor(private http: HttpClient) {
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
    return new Array<string>("ETUDIANT","SALARIE","LIBERAL","RETRAITE","Fonctionnaire");
  }


}
