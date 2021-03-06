package convertor;

import org.springframework.core.convert.converter.Converter;

import com.example.demo.entity.ReservationEntity;
import com.example.demo.model.response.ReservationResponse;

public class ReservationEntityToReservationResponseConverter implements Converter<ReservationEntity, ReservationResponse> {

	@Override
	public ReservationResponse convert(ReservationEntity source) {
		
		ReservationResponse reservationResponse = new ReservationResponse();
		reservationResponse.setCheckin(source.getCheckin());
		reservationResponse.setCheckout(source.getCheckout());
		
		return reservationResponse;
	}

}
