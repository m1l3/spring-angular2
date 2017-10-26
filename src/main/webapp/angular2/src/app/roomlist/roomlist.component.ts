import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'app/service';
import { Room } from 'app/room.interface';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  service: ReservationService;
  rooms: Room[];
  
  constructor(service: ReservationService) {
    this.service = service;
  }

  ngOnInit() {

    console.log("ROOM LIST COMPONENT");

    this.service.getAll("2017-05-05", "2017-05-05")
    .subscribe(
    rooms => {
      this.rooms = rooms
    },
    err => {
      console.log(err);
    }
    );
  }

}
