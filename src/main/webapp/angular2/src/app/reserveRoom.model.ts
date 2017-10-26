
export class ReserveRoomRequest {
    roomId: string;
    checkin: string;
    checkout: string;
  
    constructor(roomId: string, checkin: string, checkout: string) {
      this.roomId = roomId;
      this.checkin = checkin;
      this.checkout = checkout;
    }
  }