package com.cookshaven.cookshaven.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cookshaven.cookshaven.models.Cooks;

public interface CooksRepository extends JpaRepository<Cooks, Long> {

}
