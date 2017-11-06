import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ReservationService } from 'app/service';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoggedInGuard, AlwaysAuthChildrenGuard } from 'app/guard';
import { LoadReservationsService } from 'app/reservation/loadreservations.service';
import { LockComponent } from './lock/lock.component';
import { LockService } from 'app/lock/lock.service';
import { RoomsResolve } from 'app/roomlist/rooms.resolve';
import { ReservationsResolve } from 'app/reservation/reservations.resolve';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', redirectTo: '' },
  { path: 'main', component: AppComponent },
  { path: 'lock', component: LockComponent },
  {
    path: 'roomlist', component: RoomlistComponent,
    resolve: {
      rooms: RoomsResolve
    },
    canActivate: [LoggedInGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [{ path: 'reservation/:id', component: ReservationComponent, resolve: {
      room: ReservationsResolve
    }, }]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    HomeComponent,
    ReservationComponent,
    LockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:8080' },
    ReservationService,
    LoadReservationsService,
    LockService,
    LoggedInGuard,
    AlwaysAuthChildrenGuard,
    RoomsResolve,
    ReservationsResolve
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
