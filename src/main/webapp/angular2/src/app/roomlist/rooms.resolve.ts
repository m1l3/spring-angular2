import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Room } from "app/room.model";
import { ReservationService } from "app/service";
import { RoomType } from "app/room.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RoomsResolve implements Resolve<Observable<RoomType[]>> {

    constructor(private service: ReservationService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<RoomType[]> {
        console.log("Rooms resolve");
        return this.service.getAll("2017-05-05", "2017-05-05");
    }

}