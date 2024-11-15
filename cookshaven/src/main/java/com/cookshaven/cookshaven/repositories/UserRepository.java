package com.cookshaven.cookshaven.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookshaven.cookshaven.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

    
    User findByEmailAndPassword(String email, String password);

}
