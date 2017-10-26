package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.RoomEntity;

public interface RoomRepository extends CrudRepository<RoomEntity, Long> {
	
	RoomEntity findById(Long id);
	
	

}
