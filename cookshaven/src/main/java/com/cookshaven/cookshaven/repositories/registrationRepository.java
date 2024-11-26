package com.cookshaven.cookshaven.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookshaven.cookshaven.models.registration;

public interface  registrationRepository extends JpaRepository<registration, Long>{
    
}
