import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Usager} from "../../../models/usager.model";
import {FormControl, FormGroup} from "@angular/forms";
import {UsagersService} from "../../../services/usagers.service";
import {TransportsService} from "../../../services/transports.service";
import { DatePipe } from '@angular/common';


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
  constructor(private datePipe: DatePipe, private usagerService: UsagersService, private transportService: TransportsService) { }

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

    console.log(this.usager.an);
    console.log();
    const date: string = this.usager.an.getFullYear() + "-" + this.usager.an.getMonth() + "-" + this.usager.an.getDate();



    this.usagerForm = new FormGroup({
      id:new FormControl(this.usager.id),
      nom: new FormControl(this.usager.nom),
      an: new FormControl(this.datePipe.transform(this.usager.an,'yyyy-MM-dd')),
      h: new FormControl(this.usager.h),
      pt: new FormControl(this.usager.pt),
      fct: new FormControl(this.usager.fct),


    })
  }
  updateUsager(value){
    console.log(value.an);
    value.an = new Date(value.an);
    console.log('update Usager: '+ value);
    this.update.emit(value);
  }

}
