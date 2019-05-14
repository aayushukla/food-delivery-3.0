import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AdminModule } from 'src/app/restaurant-module/admin/admin.module';
import { RestaurantModule } from 'src/app/restaurant-module/restaurant/restaurant.module';
import { FormsModule } from '@angular/forms';
import { RestaurantModuleComponent } from './restaurant-module/restaurant-module.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantLoginComponent } from './restaurant-module/restaurant/restaurantLogin.component';
import { RestaurantParentModule } from './restaurant-module/restaurant-module.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
   RestaurantParentModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
