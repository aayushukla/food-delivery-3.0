import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RestaurantModuleComponent } from './restaurant-module.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './restaurant-module.routes';
import { AdminModule } from 'src/app/restaurant-module/admin/admin.module';
import { RestaurantModule } from 'src/app/restaurant-module/restaurant/restaurant.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RestaurantModuleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    RestaurantModule,
    FormsModule
  ],
  exports: [ AdminModule,
    RestaurantModule,
  RouterModule],
  providers: [],
  bootstrap: [RestaurantModuleComponent]
})
export class RestaurantParentModule { }
