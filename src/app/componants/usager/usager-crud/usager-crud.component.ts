import { Component, OnInit } from '@angular/core';
import {Usager} from "../../../models/usager.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {UsagersService} from "../../../services/usagers.service";
import {FormControl, FormGroup} from "@angular/forms";
import {TransportsService} from "../../../services/transports.service";


@Component({
  selector: 'app-usager-crud',
  templateUrl: './usager-crud.component.html',
  styleUrls: ['./usager-crud.component.css']
})
export class UsagerCrudComponent implements OnInit {
  usagers: Array<Usager>;

  selectedUsagers: Array<Usager>;
  usagerDialog: boolean;
  usager: Usager;
  submitted: boolean = false;

  usagerUpdateDialog: boolean;

  constructor(private messageService: MessageService, private usagerService: UsagersService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.usagers = new Array<Usager>();
    this.initUsagers();
    console.log('INIT!!!!!!!!!!!!!!!!!!!!!!');





    /*this.getUsagers();
  }

  onClick(): void {
    console.log(this.usagers);*/

  }

  initUsagers(){
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
  getUsagers() {
    //this.usagerService.getUsagersFromBackend().subscribe(
    // this.usagerService.getUsagers().subscribe(
    //   (data) => {
    //     this.usagers = data;
    //     console.log(data);

    //   },
    //   (err) => console.log(err.message)
    // );
  }

  openNew() {
    this.usager = new Usager();
    this.submitted = false;
    this.usagerDialog = true;
  }

  deleteSelectedUsagers() {
    // for (let usager of this.selectedUsagers){
    //   this.deleteUsager(usager);
    // }
  }

  editUsager(usager: Usager) {
    console.log(usager);
    this.usager = {...usager};
    this.submitted = true;

    this.usagerUpdateDialog = true;
  }
  deleteUsager(usager: Usager) {
    /*console.log(usager);

    this.usagerService.deleteUsagerInBackend(usager).subscribe(
      (data) => {
        console.log(this.usager);
        this.usagerDialog = false;
        window.location.reload();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usager Deleted Successfuly' });
      },
      (err) => {
        console.log(err.message)
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Usager Failed To Edit' });
      }
    );*/
  }

  saveUsager() {
    if (this.submitted) {
      // this.usagerService.editUsagerInBackend(this.usager).subscribe(
      //   (data) => {
      //     console.log(this.usager);
      //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usager Added Successfuly' });
      //     this.usagerDialog = false;
      //     window.location.reload();
      //   },
      //   (err) => {
      //     console.log(err.message)
      //     this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Usager Failed To Add' });
      //   }
      // );
    }
    else {
      console.log(this.usager);
      // this.usagerService.createUsagerInBackend(this.usager).subscribe(
      this.usagerService.addUsager(this.usager).subscribe(
        (data) => {
          console.log(this.usager);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usager Edited Successfuly' });
          this.usagerDialog = false;
          window.location.reload();
        },
        (err) => {
          console.log(err.message)
          this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Usager Failed To Edit' });
        }
      );
    }
  }

  hideDialog() {
    this.usagerDialog = false;
    this.usagerUpdateDialog = false;
    this.submitted = false;


  }

  addUsager($event: any) {
    // To change
    this.usagers.push($event);
    this.hideDialog();

  }

  updateUsager($event: any) {
    let usager: Usager = $event;

    const objIndex = this.usagers.findIndex((obj => obj.nom == usager.nom));
    this.usagers[objIndex]= usager;
    console.log(this.usagers);

    this.hideDialog();
  }
}
