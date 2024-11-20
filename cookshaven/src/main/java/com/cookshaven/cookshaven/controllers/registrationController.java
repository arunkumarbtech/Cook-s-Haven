package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cookshaven.cookshaven.models.registration;
import com.cookshaven.cookshaven.services.registrationService;

@Controller
public class registrationController {



    @GetMapping("/registration")
    public String showRegsitrationPage() {
        return "registration";
    }

    @Autowired
    private registrationService registrationService;

    // Endpoint to save data
    @PostMapping("/registration")
    public registration saveRegistration(@ModelAttribute registration registration) {

        System.out.println("Controller Received Data: " + registration);

        return registrationService.saveRegistration(registration);
    }

}
