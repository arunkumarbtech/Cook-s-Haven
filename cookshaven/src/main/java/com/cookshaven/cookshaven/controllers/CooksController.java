package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.cookshaven.cookshaven.models.Cooks;
import com.cookshaven.cookshaven.services.CooksService;


@Controller
public class CooksController {

    @Autowired
    private CooksService cooksService;

    @PostMapping("/cookregister")
    public String saveCooks(Cooks cooks) {
        cooksService.saveCooks(cooks);
        return "redirect:/registration";
    }
    
}
