import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {

  customerName = "Michael";
  constructor() { }

  ngOnInit(): void {
  }

  displayName(){
    console.log(this.customerName);
  }

}
