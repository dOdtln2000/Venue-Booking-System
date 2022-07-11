import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssTestComponent } from './css-test/css-test.component';
import { DetailsBookingComponent } from './details-booking/details-booking.component';
import { HomeComponent } from './home/home.component';
import { VenueBookingSystemComponent } from './venue-booking-system/venue-booking-system.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'css-test',
    component: CssTestComponent
  },
  {
    path: 'bookingSystem',
    component: VenueBookingSystemComponent
  },
  {
    path: 'bookings/thismonth',
    component: DetailsBookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
