package com.cookshaven.cookshaven.controllers;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.ui.Model;
import com.cookshaven.cookshaven.models.registration;
import com.cookshaven.cookshaven.services.registrationService;

// import ch.qos.logback.core.model.Model;

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
    public String saveRegistration (registration registration) {
         
        registrationService.saveRegistration(registration);
        return"cooksprofile";
    }

    @GetMapping("/cooksprofile/{id}")
    public String getCooksProfile(@PathVariable Long id, Model model) {
        // Fetch the registration record
        registration registration = registrationService.findById(id)
                .orElseThrow(() -> new RuntimeException("Registration not found"));

        // Retrieve the image data from the record
        model.addAttribute("registrationId", registration.getId()); // ID for fetching the image
        model.addAttribute("kitchenName", registration.getKitchen_name()); // Kitchen name
        // Return the image data with appropriate headers
        return "cooksprofile";
    }

}
