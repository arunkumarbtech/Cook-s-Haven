package com.cookshaven.cookshaven.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cookshaven.cookshaven.models.registration;
import com.cookshaven.cookshaven.repositories.registrationRepository;
@Service
public class registrationService {
    @Autowired
    private registrationRepository regisRepo;

    public void saveRegistration(registration reg){
        regisRepo.save(reg);
    }
}
