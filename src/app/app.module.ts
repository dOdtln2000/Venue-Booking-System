import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenueBookingSystemComponent } from './venue-booking-system/venue-booking-system.component';
import { CssTestComponent } from './css-test/css-test.component';
import { HomeComponent } from './home/home.component';
import { DetailsBookingComponent } from './details-booking/details-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [				
    AppComponent,
      VenueBookingSystemComponent,
      CssTestComponent,
      HomeComponent,
      DetailsBookingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
