import { Component, OnInit } from '@angular/core';
import {Usager} from "../../../models/usager.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {UsagersService} from "../../../services/usagers.service";


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
  submitted: boolean;

  constructor(private messageService: MessageService, private usagerService: UsagersService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    /*this.getUsagers();
  }

  onClick(): void {
    console.log(this.usagers);*/

  }

  getUsagers() {
    /*this.usagerService.getUsagersFromBackend().subscribe(
      (data) => {
        this.usagers = data;
        console.log(data);

      },
      (err) => console.log(err.message)
    );*/
  }

  openNew() {
    // this.usager = new Usager();
    // this.submitted = false;
    // this.usagerDialog = true;
  }

  deleteSelectedUsagers() {
    // for (let usager of this.selectedUsagers){
    //   this.deleteUsager(usager);
    // }
  }

  editUsager(usager: Usager) {
    // this.usager = { ...usager };
    // this.submitted = true;
    // this.usagerDialog = true;
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
    /*if (this.submitted) {
      this.usagerService.editUsagerInBackend(this.usager).subscribe(
        (data) => {
          console.log(this.usager);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usager Added Successfuly' });
          this.usagerDialog = false;
          window.location.reload();
        },
        (err) => {
          console.log(err.message)
          this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Usager Failed To Add' });
        }
      );
    }
    else {
      this.usager.userId = this.authService.userId;
      console.log(this.usager);
      this.usagerService.createUsagerInBackend(this.usager).subscribe(
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
    }*/
  }

  hideDialog() {
    // this.usagerDialog = false;


  }

}
