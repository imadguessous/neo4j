import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Usager} from "../../../models/usager.model";
import {FormControl, FormGroup} from "@angular/forms";
import {UsagersService} from "../../../services/usagers.service";
import {TransportsService} from "../../../services/transports.service";



@Component({
  selector: 'app-usager-update',
  templateUrl: './usager-update.component.html',
  styleUrls: ['./usager-update.component.css']
})
export class UsagerUpdateComponent implements OnInit {

  @Input()
  usager: Usager;

  @Output()
  update= new EventEmitter();

  transportsTypes: Array<string>;
  defaultTransport: string ;

  usagersFonctions: Array<string>;
  defaultUsagerFonction: string ;
  usagerForm: FormGroup;
  constructor(private usagerService: UsagersService, private transportService: TransportsService) { }

  ngOnInit(): void {

    this.transportsTypes=this.transportService.getTransportsTypes();
    console.log(this.transportsTypes);
    if (this.transportsTypes.length>0) {
      this.defaultTransport = this.transportsTypes[0];
    }

    this.usagersFonctions=this.usagerService.getUsagersFonctions();
    console.log(this.usagersFonctions);
    if (this.usagersFonctions.length>0) {
      this.defaultUsagerFonction = this.usagersFonctions[0];
    }

    this.usagerForm = new FormGroup({
      nom: new FormControl(this.usager.nom),
      an: new FormControl(this.usager.an),
      h: new FormControl(this.usager.h),
      pt: new FormControl(this.usager.pt),
      fct: new FormControl(this.usager.fct),

    })
  }
  updateUsager(value){
    this.update.emit(value);
  }

}
