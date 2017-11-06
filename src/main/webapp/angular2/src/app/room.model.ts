import { RoomType } from "app/room.interface";
import { ReserveRoomResponse } from "app/reserveRoom.model";


  export class Room implements RoomType {
    id: string;
    roomNumber: string;
    price: string;
    links: string;
    reservationEntityList: ReserveRoomResponse[];

  }