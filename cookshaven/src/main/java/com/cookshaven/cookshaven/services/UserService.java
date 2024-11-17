package com.cookshaven.cookshaven.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cookshaven.cookshaven.models.User;
import com.cookshaven.cookshaven.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user){
        userRepository.save(user);
    }

    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
    
    // Fetch the username by userId
    public String getUserNameById(Long userId) {
        User user = userRepository.findById(userId).orElse(null); // Find user by ID
        if (user != null) {
            return user.getName(); // Return the name if user found
        }
        return null; // Return null if user not found
    }
}
