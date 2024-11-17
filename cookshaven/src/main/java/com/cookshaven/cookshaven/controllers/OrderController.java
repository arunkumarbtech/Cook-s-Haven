package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.cookshaven.cookshaven.services.UserService;

@Controller
public class OrderController {

    @Autowired
    public UserService userService;

    @GetMapping("/orderpage")
    public String showOrderPage(Model model, @SessionAttribute(name = "username", required = false) String username) {
        if (username != null) {
            model.addAttribute("username", username); // Add the name to the model
        }
        return "orderpage"; // Render the orderpage view
    }

}
