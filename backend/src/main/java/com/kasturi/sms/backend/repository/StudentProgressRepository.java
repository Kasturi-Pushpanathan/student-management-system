package com.kasturi.sms.backend.repository;

import com.kasturi.sms.backend.entity.StudentProgress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentProgressRepository extends JpaRepository<StudentProgress, Long> {

}
