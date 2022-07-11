import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-booking',
  templateUrl: './details-booking.component.html',
  styleUrls: ['./details-booking.component.css']
})
export class DetailsBookingComponent implements OnInit {
  roomID: any;
  bookingData = [
    {
      "id": 1,
      "roomId": "A101",
      "startTime": "2019-09-28 13:00:00",
      "endTime": "2019-09-28 14:00:00",
      "title": "Lunch with Petr"
    },
    {
      "id": 2,
      "roomId": "A101",
      "startTime": "2019-09-28 14:00:00",
      "endTime": "2019-09-28 15:00:00",
      "title": "Sales Weekly Meeting"
    },
    {
      "id": 3,
      "roomId": "A101",
      "startTime": "2019-09-28 16:00:00",
      "endTime": "2019-09-28 18:00:00",
      "title": "Anastasia Website Warroom"
    },
    {
      "id": 4,
      "roomId": "A101",
      "startTime": "2019-09-29 13:00:00",
      "endTime": "2019-09-29 14:00:00",
      "title": "One-on-One Session"
    },
    {
      "id": 5,
      "roomId": "A101",
      "startTime": "2019-09-29 16:00:00",
      "endTime": "2019-09-29 18:00:00",
      "title": "UGC Sprint Planning"
    },
    {
      "id": 6,
      "roomId": "A102",
      "startTime": "2019-09-30 09:00:00",
      "endTime": "2019-10-04 18:00:00",
      "title": "5-Day Design Sprint Workshop"
    },
    {
      "id": 7,
      "roomId": "Auditorium",
      "startTime": "2019-09-19 09:00:00",
      "endTime": "2019-09-23 19:00:00",
      "title": "Thai Tech Innovation 2019"
    },
    {
      "id": 8,
      "roomId": "A101",
      "startTime": "2019-09-28 10:00:00",
      "endTime": "2019-09-28 13:00:00",
      "title": "Raimonland project"
    },
    {
      "id": 9,
      "roomId": "A102",
      "startTime": "2019-09-30 18:00:00",
      "endTime": "2019-09-30 20:00:00",
      "title": "Management Meetinng"
    },
    {
      "id": 10,
      "roomId": "A101",
      "startTime": "2019-10-04 14:00:00",
      "endTime": "2019-10-06 11:00:00",
      "title": "3-day workshop Corgi costume"
    }
  ];
  bookingDetails:any = [];
  BookingInMonth:any = [];

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.roomID = params.roomId;
    })
    let j = 0
    for(let i = 0 ; i< this.bookingData.length ; i++){
      if(this.roomID == this.bookingData[i].roomId){
        this.bookingDetails[j] = this.bookingData[i]
        j++
      }
    }
    let today = new Date();
        
    this.getBookingInMonth(today.getMonth()+1,today.getFullYear())
    // this.getBookingInMonth(9,2019)

  }

  getBookingInMonth(month: number,year: number){
    let j = 0;
    for(let i = 0 ; i < this.bookingDetails.length ; i++ ){
      //Start Date Booking
      const [dateSB, timeSB] = this.bookingDetails[i].startTime.split(' ');

      const [yearSB,monthSB, daySB ] = dateSB.split('-');

      //End Date Booking
      const [dateEB, timeEB] = this.bookingDetails[i].startTime.split(' ');

      const [yearEB,monthEB, dayEB ] = dateEB.split('-');
      if(yearSB == year){
        if(monthSB == month){
          this.BookingInMonth[j] = this.bookingDetails[i]
          j++
        }
      }
      else if(yearEB == year){
        if(monthEB == month){
          this.BookingInMonth[j] = this.bookingDetails[i]
          j++
        }
      }
    }
  }

}