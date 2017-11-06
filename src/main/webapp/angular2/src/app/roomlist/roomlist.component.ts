import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'app/service';
import { RoomType } from 'app/room.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadReservationsService } from 'app/reservation/loadreservations.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  rooms: RoomType[];

  constructor(private loadReservationsService: LoadReservationsService, private router: Router,private service: ReservationService, private route: ActivatedRoute) {
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

  viewReservations(id: number): void {
    this.loadReservationsService.viewReservations(id);
    this.router.navigate(['reservation/', id], {relativeTo: this.route });
  }

}
