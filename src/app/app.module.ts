import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import {SplitterModule} from 'primeng/splitter';
import { UsagerComponent } from './componants/usager/usager.component';
import { TransportsComponent } from './componants/transports/transports.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { UsagerCrudComponent } from './componants/usager/usager-crud/usager-crud.component';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {Dialog, DialogModule} from 'primeng/dialog';

import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';


import {ConfirmationService} from 'primeng/api';
import {UsagersService} from "./services/usagers.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsagerComponent,
    TransportsComponent,
    UsagerCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    AccordionModule,
    TableModule,
    PaginatorModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [MessageService, ConfirmationService, UsagersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
