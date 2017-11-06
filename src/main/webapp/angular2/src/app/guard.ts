import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { LockService } from "app/lock/lock.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private lockService: LockService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log("LoggedInGuard");
        return this.lockService.getLoggedIn();
    }

}

@Injectable()
export class AlwaysAuthChildrenGuard implements CanActivateChild {

    constructor(private lockService: LockService) { }

    canActivateChild() {

        console.log("AlwaysAuthChildrenGuard");
        return this.lockService.getChildLock();
    }
}