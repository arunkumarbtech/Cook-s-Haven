package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cookshaven.cookshaven.models.User;
import com.cookshaven.cookshaven.services.UserService;

@Controller
public class UserController {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

    @Autowired
    private UserService userService;
    
    //method to save signup data
    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user) {
        userService.saveUser(user);
        return "redirect:/login?success=true"; // Redirect with success parameter
    }

    // Method to process login data
    @PostMapping("/signin")
    public String loginUser(@RequestParam("email") String email, 
                            @RequestParam("password") String password, 
                            Model model) {
        // Check if the user exists with matching email and password
        User user = userService.findByEmailAndPassword(email, password);
        if (user != null) {
            // Login successful
            model.addAttribute("username", user.getName());
            return "redirect:/orderpage"; // redirect to a logged-in homepage
        } else {
            // Login failed
            model.addAttribute("error", "Invalid email or password");
            return "login"; // reloads the sign-in page with an error message
        }
    }
    
}
