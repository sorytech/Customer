import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Composants/customers/customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CustomerService} from './Services/customer.service';
import {HttpClientModule} from '@angular/common/http'
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerComponent } from './Composants/customer/customer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
