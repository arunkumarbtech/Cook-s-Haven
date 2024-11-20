package com.cookshaven.cookshaven.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cookshaven.cookshaven.models.registration;
import com.cookshaven.cookshaven.repositories.registrationRepository;

@Service
public class registrationService {

    @Autowired
    private registrationRepository registrationRepository;

    // Save Registration Data
    public registration saveRegistration(registration registration) {
        System.out.println("Service reached" + registration);
        return registrationRepository.save(registration);
    }
}
