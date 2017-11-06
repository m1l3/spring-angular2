import { Injectable } from "@angular/core";

@Injectable()
export class LockService {

    private loggedIn: boolean = false;
    private childrenLock: boolean = false;


    getChildLock(): boolean {
        console.log("Child Lock: "+this.childrenLock);
        return this.childrenLock;
    }

    getLoggedIn(): boolean {
        console.log("Logged: "+this.loggedIn);
        return this.loggedIn;
    }

    setChildLocked() {
        console.log("Child locked!");
        this.childrenLock = false;
        console.log("Child Lock: "+this.childrenLock);
    }

    setChildUnlocked() {
        console.log("Child unlocked!");
        this.childrenLock = true;
        console.log("Child Lock: "+this.childrenLock);
    }

    setLoggedIn() {
        console.log("Logged In!");
        this.loggedIn = true;
        console.log("Logged: "+this.loggedIn);
    }

    setLoggedOut() {
        console.log("Logged Out!");
        this.loggedIn = false;
        console.log("Logged: "+this.loggedIn);
    }
}