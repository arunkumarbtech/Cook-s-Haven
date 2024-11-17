package com.cookshaven.cookshaven.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookshaven.cookshaven.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

    
    User findByEmailAndPassword(String email, String password);

    // Custom query method to find user by ID (Optional if using default findById)
    Optional<User> findById(Long userId);

}
