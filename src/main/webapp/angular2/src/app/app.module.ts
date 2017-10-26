import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ReservationService } from 'app/service';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', redirectTo: '' },
  { path: 'main', component: AppComponent },
  { path: 'roomlist', component: RoomlistComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ReservationService,
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
