package com.cookshaven.cookshaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cookshaven.cookshaven.services.OtpService;

import jakarta.servlet.Registration;

@RestController
@RequestMapping("/api/v1/otp")
public class OtpController {
    @Autowired
    private OtpService otpService;

    @PostMapping("/send")
    public String sendOtp(@RequestParam String mobileNumber) {
        if (mobileNumber == null || !mobileNumber.matches("\\d{10}")) {
            return "Invalid phone number. Please provide a valid 10-digit mobile number.";
        }

        String otp = otpService.generateOtp();
        otpService.sendOtp(mobileNumber, otp);
        return "OTP sent successfully to " + mobileNumber;
    }
}
