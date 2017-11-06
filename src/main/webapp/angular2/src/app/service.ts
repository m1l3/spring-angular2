import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReserveRoomRequest, ReserveRoomResponse } from "app/reserveRoom.model";
import { Observable } from "rxjs/Observable";
import { RoomType } from "app/room.interface";
import { Room } from "app/room.model";

@Injectable()
export class ReservationService {
  private readonly roomReservationUrl = "/room/reservation/v1";
  request: ReserveRoomRequest;

  constructor(private http: Http, @Inject('API_URL') private apiUrl: string) {
  }

  createReservation(body: ReserveRoomRequest) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let option = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}${this.roomReservationUrl}`, body, option)
  }

  getAll(currentCheckInVal: string, currentCheckOutVal: string): Observable<RoomType[]> {
    return this.http.get(`${this.apiUrl}${this.roomReservationUrl}?checkin=${currentCheckInVal}&checkout=${currentCheckOutVal}`)
      .map(this.mapRooms);
  }

  mapRooms(response: Response): RoomType[] {
    return response.json().content;
  }

  mapRoom(response: Response): Room {
    console.log(response.json());
    return response.json();
  }

  
  // mapRoomReservations(response: Response): ReserveRoomResponse[] {
  //   return response.json().reservationEntityList;
  // }

  getRoomById(roomId: number){
    return this.http.get(`${this.apiUrl}${this.roomReservationUrl}/${roomId}`)
    .map(this.mapRoom);
  }

  // getRoomReservations(roomId: number){
  //   return this.http.get(`${this.apiUrl}${this.roomReservationUrl}/${roomId}`)
  //   .map(this.mapRoomReservations);
  // }
}