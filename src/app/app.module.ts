import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
 import { DataTablesModule } from 'angular-datatables';
import { CreateClientesComponent } from './components/create-clientes/create-clientes.component';
import { DetailsClientesComponent } from './components/details-clientes/details-clientes.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CreateClientesComponent,
    DetailsClientesComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
