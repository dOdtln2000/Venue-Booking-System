import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-booking-system',
  templateUrl: './venue-booking-system.component.html',
  styleUrls: ['./venue-booking-system.component.css']
})
export class VenueBookingSystemComponent implements OnInit {
  submitted:boolean = false;
  form: FormGroup;
  chkRoom:any = "";
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
  roomList = ["A101","A102","Auditorium"]
  
  constructor(private fb: FormBuilder,public router: Router,) { 
    this.form = this.fb.group({
      roomSelected: '',
      startTime: '',
      endTime: '',
    });
  }

  ngOnInit() {
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  checkAvailability(){
    for(let i=0 ; i<this.bookingData.length ; i++){
      if(this.form.value.roomSelected == this.bookingData[i].roomId){
        //Start Date Selected
        const [dateS, timeS] = this.form.value.startTime.replace("T"," ").split(' ');

        const [yearS,monthS, dayS ] = dateS.split('-');
        const [hoursS, minutesS] = timeS.split(':');

        const datesS = new Date(+yearS, +monthS-1, +dayS, +hoursS+7, +minutesS, +'00');
        //End Date Selected
        const [dateE, timeE] = this.form.value.endTime.replace("T"," ").split(' ');

        const [yearE,monthE, dayE ] = dateE.split('-');
        const [hoursE, minutesE] = timeE.split(':');

        const datesE = new Date(+yearE, +monthE-1, +dayE, +hoursE+7, +minutesE, +'00');

        //Start Date Booking
        const [dateSB, timeSB] = this.bookingData[i].startTime.split(' ');

        const [yearSB,monthSB, daySB ] = dateSB.split('-');
        const [hoursSB, minutesSB, secondsSB] = timeSB.split(':');

        const datesSB = new Date(+yearSB, +monthSB-1, +daySB, +hoursSB+7, +minutesSB, +secondsSB);
        //End Date Booking
        const [dateEB, timeEB] = this.bookingData[i].startTime.split(' ');

        const [yearEB,monthEB, dayEB ] = dateEB.split('-');
        const [hoursEB, minutesEB, secondsEB] = timeEB.split(':');

        const datesEB = new Date(+yearEB, +monthEB-1, +dayEB, +hoursEB+7, +minutesEB, +secondsEB);
        
        if((datesS.getFullYear() == datesSB.getFullYear()) || 
        (datesS.getFullYear() == datesEB.getFullYear()) ||
        (datesE.getFullYear() == datesSB.getFullYear()) ||
        (datesE.getFullYear() == datesEB.getFullYear())){

          if(((datesS.getMonth() >= datesSB.getMonth()) && (datesS.getMonth() <= datesEB.getMonth())) ||
            ((datesE.getMonth() >= datesSB.getMonth()) && (datesE.getMonth() <= datesEB.getMonth()))){

            if((datesS.getDate() >= datesSB.getDate() && datesS.getDate() <= datesEB.getDate()) ||
            (datesE.getDate() >= datesSB.getDate() && datesE.getDate() <= datesEB.getDate())){

              if((datesS.getDate() === datesSB.getDate()) || (datesE.getDate() === datesEB.getDate())){

                if(((datesS.getTime() >= datesSB.getTime()) || (datesS.getTime() <= datesEB.getTime())) ||
                ((datesE.getTime() >= datesSB.getTime()) || (datesE.getTime() <= datesEB.getTime()))){ 
                  console.log("This room is not available.")
                  break;
                } 
                else{
                  console.log("This room is available.")
                  break;
                }
              }
              else{
                console.log("This room is available.")
                break;
              }
             }
             else{
              console.log("This room is available.")
              break;
            }
          }
          else{
            console.log("This room is available.")
            break;
          }

        }
        else{
          console.log("This room is available.")
          break;
        }
      }
    }
  }

  showDetailBooking(){
    this.router.navigate(['bookings/thismonth'], { queryParams: { roomId : this.chkRoom } });
  }

  clear(){
    this.form.reset();
  }
}
