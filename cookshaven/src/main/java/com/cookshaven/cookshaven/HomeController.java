package com.cookshaven.cookshaven;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class HomeController {
    @GetMapping("/home") 
    public String showHomePage() {
        return "index";
    }

    @GetMapping("/login")
    public String showLoginPage(){
        return "login";
    }

    @GetMapping("/orderpage")
    public String showOrderPage(){
        return "orderpage";
    }
}
