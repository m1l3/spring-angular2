import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReserveRoomRequest } from "app/reserveRoom.model";
import { Observable } from "rxjs/Observable";
import { Room } from "app/room.interface";

@Injectable()
export class ReservationService {
  private baseUrl: string;
  private readonly roomReservationUrl = "/room/reservation/v1";
  request: ReserveRoomRequest;

  constructor(private http: Http, @Inject('API_URL') private apiUrl: string) {
    this.baseUrl = apiUrl;
  }

  createReservation(body: ReserveRoomRequest) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let option = new RequestOptions({ headers: headers });

    return this.http.post(`${this.baseUrl} ${this.roomReservationUrl}`, body, option)
  }

  getAll(currentCheckInVal: string, currentCheckOutVal: string): Observable<Room[]> {
    return this.http.get(`${this.baseUrl} ${this.roomReservationUrl} "?checkin=" ${currentCheckInVal} "&checkout=" ${currentCheckOutVal}`)
      .map(this.mapRoom);
  }

  mapRoom(response: Response): Room[] {
    return response.json().content;
  }

}