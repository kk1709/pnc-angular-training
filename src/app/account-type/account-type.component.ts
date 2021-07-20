import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {
  flag = true;
  customerName = "John";
  accountList = [
    {name: 'Saving Account', type: 'Saving'},
    {name: 'Credit Card Account', type: 'CCA'},
    {name: 'Checking Account', type: 'Debit'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  displayName(){
    console.log(this.customerName);
  }

}
