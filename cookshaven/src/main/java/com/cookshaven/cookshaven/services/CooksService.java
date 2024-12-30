package com.cookshaven.cookshaven.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cookshaven.cookshaven.models.Cooks;
import com.cookshaven.cookshaven.repositories.CooksRepository;

@Service
public class CooksService {

    @Autowired
    private CooksRepository cooksRepository;

    public void saveCooks(Cooks cooks){
        cooksRepository.save(cooks);
    }
}
