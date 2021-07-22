import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {
  flag = true;
  custName = "Michael";
  type = "";
  childData="";
  accountList = [
    {name: 'Saving Account', type: 'Saving'},
    {name: 'Credit Card Account', type: 'CCA'},
    {name: 'Checking Account', type: 'Debit'}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveData(){
    this.accountList.push( {name: this.custName, type: this.type});
  }

  navigateToDetails(){
    this.router.navigateByUrl('details');
  }

  getDataFromChild(childMsg: string){
  this.childData=childMsg;
  }

}
