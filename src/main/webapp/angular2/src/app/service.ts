import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReserveRoomRequest } from "app/reserveRoom.model";
import { Observable } from "rxjs/Observable";
import { Room } from "app/room.interface";

@Injectable()
export class ReservationService{

  private baseUrl: string = 'http://localhost:8080';
  request: ReserveRoomRequest;
    constructor(private http: Http){

    }

    createReservation(body: ReserveRoomRequest){
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type' : 'application/json'});
        let option = new RequestOptions({headers: headers});
    
        return this.http.post(this.baseUrl+'/room/reservation/v1',body,option)
      }

      getAll(currentCheckInVal: string, currentCheckOutVal: string): Observable<Room[]> {
        return this.http.get(this.baseUrl + "/room/reservation/v1?checkin="+currentCheckInVal+"&checkout="+currentCheckOutVal)
        .map(this.mapRoom);
      }

      mapRoom(response: Response): Room[] {
        return response.json().content;
      }
      
}