import {Component, Input, OnInit} from '@angular/core';
import {Usager} from "../../../models/usager.model";

@Component({
  selector: 'app-usager-row',
  templateUrl: './usager-row.component.html',
  styleUrls: ['./usager-row.component.css']
})
export class UsagerRowComponent implements OnInit {

  @Input()
  usager: Usager;
  usagerUpdateDialog: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  editUsager(usager: Usager) {
    // this.usager = { ...usager };
    // this.submitted = true;
    this.usagerUpdateDialog = true;
  }
  deleteUsager(usager: Usager) {

  }
  updateUsager($event: any) {

  }

}
