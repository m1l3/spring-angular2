import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ReservationService } from 'app/service';
import { ReserveRoomRequest } from 'app/reserveRoom.model';
import { Room } from 'app/room.interface';
import { Roomsearch } from 'app/roomSearch.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  service: ReservationService;
  currenCheckOutVal: any;
  public submitted: boolean;
  roomsearch: FormGroup;
  rooms: Room[];
  currentCheckInVal: string;
  currentCheckOutVal: string;


  constructor(service: ReservationService,private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
    this.roomsearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    })

    const roomsearchValueChanges$ = this.roomsearch.valueChanges;

    roomsearchValueChanges$.subscribe(valChange => {
      this.currentCheckInVal = valChange.checkin;
      this.currentCheckOutVal = valChange.checkout;
    }
    )
  }

  onSubmit({ value, valid }: { value: Roomsearch, valid: boolean }) {
    this.service.getAll(this.currentCheckInVal, this.currentCheckOutVal)
      .subscribe(
      rooms => {
        this.rooms = rooms
      },
      err => {
        console.log(err);
      }
      );
  }

  reserveRoom(value: string) {
    let reserveRoomRequest : ReserveRoomRequest = this.createReserveRoomRequest(value);
    this.service.createReservation(reserveRoomRequest)
      .subscribe(res => console.log(res));
  }

  createReserveRoomRequest(value): ReserveRoomRequest {
    return new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);
  }
}