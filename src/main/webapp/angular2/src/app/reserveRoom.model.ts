
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

  
export class ReserveRoomResponse {
  id: string;
  checkin: Date;
  checkout: Date;

  constructor(roomId: string, checkin: Date, checkout: Date) {
    this.id = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}