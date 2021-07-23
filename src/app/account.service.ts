import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountType: string;  
  constructor() { }

  public getAccountType(){
    return this.accountType;
  }

  public setAccountType(type: string){
    this.accountType = type;
  }


}
