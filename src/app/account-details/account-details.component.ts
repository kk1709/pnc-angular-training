import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  dataFromType= "";
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getDataFromAccountType();
  }

  getDataFromAccountType(){
   this.dataFromType= this.accountService.getAccountType();
  }
}
