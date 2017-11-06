import { Injectable } from "@angular/core";
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LoadReservationsService{

    private viewReservationsRequestSource = new Subject<number>();


   loadReservations$ = this.viewReservationsRequestSource.asObservable();


    viewReservations(roomId: number){
        this.viewReservationsRequestSource.next(roomId);
    }
}