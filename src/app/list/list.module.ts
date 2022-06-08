import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
