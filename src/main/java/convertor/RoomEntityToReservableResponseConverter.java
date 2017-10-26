package convertor;

import org.springframework.core.convert.converter.Converter;

import com.example.demo.entity.RoomEntity;
import com.example.demo.model.Links;
import com.example.demo.model.Self;
import com.example.demo.model.response.ReservableRoomResponse;
import com.example.demo.rest.ResourceConstants;

public class RoomEntityToReservableResponseConverter implements Converter<RoomEntity, ReservableRoomResponse> {

	@Override
	public ReservableRoomResponse convert(RoomEntity source) {
		// TODO Auto-generated method stub

		ReservableRoomResponse reservationResponse = new ReservableRoomResponse();
		reservationResponse.setId(source.getId());
		reservationResponse.setRoomNumber(source.getRoomNumber());
		reservationResponse.setPrice(Integer.valueOf(source.getPrice()));

		Links links = new Links();
		Self self = new Self();
		self.setRef(ResourceConstants.ROOM_RESERVATION_V1+"/"+source.getId());
		links.setSelf(self);
		
		reservationResponse.setLinks(links);
		
		return reservationResponse;
	}

}
