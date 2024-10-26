package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cookshaven.cookshaven.models.User;
import com.cookshaven.cookshaven.services.UserService;


@Controller
public class UserController {
    
    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user){
        userService.saveUser(user);
        return "Registration Successful";
    }
}
