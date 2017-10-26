package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.ReservationEntity;

public interface ReservationRepository extends CrudRepository<ReservationEntity, Long> {

}
