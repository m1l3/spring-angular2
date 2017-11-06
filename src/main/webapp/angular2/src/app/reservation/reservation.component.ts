import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'app/service';
import { RoomType } from 'app/room.interface';
import { Room } from 'app/room.model';
import { ReserveRoomRequest, ReserveRoomResponse } from 'app/reserveRoom.model';
import { LoadReservationsService } from 'app/reservation/loadreservations.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private id: number;
  private room: Room;

  constructor(private loadReservationsService: LoadReservationsService, private service: ReservationService, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });

    loadReservationsService.loadReservations$.subscribe(
      id => {

        this.service.getRoomById(id)
          .subscribe(
          room => {
            this.room = room;
          },
          err => {
            console.log(err);
          }
          );
      }
    )
  }

  ngOnInit() {
    this.service.getRoomById(this.id)
      .subscribe(
      room => {
        this.room = room;
      },
      err => {
        console.log(err);
      }
      );
  }

}
