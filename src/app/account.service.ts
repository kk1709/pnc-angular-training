import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountType: string;  
  constructor(private http: HttpClient) { }

  public getAccountType(){
    return this.accountType;
  }

  public setAccountType(type: string){
    this.accountType = type;
  }

  public getDataFromApi(){
    return this.http.get('./assets/mockData.json');
  }

}
