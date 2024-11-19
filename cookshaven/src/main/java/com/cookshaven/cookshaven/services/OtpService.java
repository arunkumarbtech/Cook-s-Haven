package com.cookshaven.cookshaven.services;

import java.util.Random;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cookshaven.cookshaven.config.TwilioConfig;
import com.twilio.Twilio;

@Service
public class OtpService {

    @Autowired
    private TwilioConfig twilioConfig;

    public String generateOtp() {
        Random random = new Random();
        return String.format("%06d", random.nextInt(1000000)); // Generates a 6-digit OTP
    }

    public void sendOtp(String toPhoneNumber, String otp) {
        Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());

        Message.creator(
                new PhoneNumber(toPhoneNumber), // To
                new PhoneNumber(twilioConfig.getFromPhoneNumber()), // From
                "Your OTP is: " + otp
        ).create();
    }
}
