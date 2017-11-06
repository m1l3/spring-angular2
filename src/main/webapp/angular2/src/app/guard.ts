import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";

export class LoggedInGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log("LoggedInGuard");
        
        let logged: number = 1;

        switch(logged){
            case 0: {
                //window.alert("You don't have permission to view this page");
                return false;
            }
            case 1: {
                //window.alert("Authenticated!");
                return true;
            }
            default: {
                //window.alert("You don't have permission to view this page");
                return false;
            }
        }
        
    }
    
}


export class AlwaysAuthChildrenGuard implements CanActivateChild {
    canActivateChild() {
      console.log("AlwaysAuthChildrenGuard");
      return true;
    }
  }