import { Component, OnInit } from '@angular/core';
import { LockService } from 'app/lock/lock.service';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit {

  constructor(private lockService: LockService) {
   }

  childLock(): void {
    this.lockService.setChildLocked();
  }

  childUnlock(): void {
    this.lockService.setChildUnlocked();
  }

  logIn(): void {
    this.lockService.setLoggedIn();
  }

  logOut(): void {
    this.lockService.setLoggedOut();
  }

  ngOnInit() {
  }

}
