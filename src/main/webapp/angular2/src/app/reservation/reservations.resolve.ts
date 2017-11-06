import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Room } from "app/room.model";
import { ReservationService } from "app/service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ReservationsResolve implements Resolve<Observable<Room>> {

    constructor(private service: ReservationService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Room> {
        let id: number = +route.paramMap.get('id');
        return this.service.getRoomById(id);
    }

}