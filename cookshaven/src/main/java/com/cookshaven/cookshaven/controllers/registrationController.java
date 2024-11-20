package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    private registrationService regService;

    @PostMapping("/registration")
    public String registerCook(@ModelAttribute("reg") registration reg, Model model) {
        regService.saveRegistration(reg);
        model.addAttribute("message", "Registration successful!");
        return "redirect:/orderpage";
    }

}
