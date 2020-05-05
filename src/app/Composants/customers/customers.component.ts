import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Models/customer';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers : MatTableDataSource<Customer>;
  displayedColumns: string[] = ['Photo','Prenom', 'Nom', 'Genre', 'Email', 'Addresse', 'Code Postal', 'Ville', 'Total Commande'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  //ata: PeriodicElement[] = ELEMENT_DATA;

  constructor(private customerS: CustomerService) {
    this.customerS.getCustomers().subscribe(data => {
      this.customers = new MatTableDataSource(data);
      console.log(this.customers)
    })
   }

  ngOnInit(): void {
  }

  

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  isPath(path: string): boolean{
    return path=="Photo";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customers.filter = filterValue.trim().toLowerCase();
  }

}
