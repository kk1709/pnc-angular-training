import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccountTypeComponent } from './account-type/account-type.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes : Routes = [
  {path: '', component: AccountTypeComponent},
  {path: 'details', component: AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
