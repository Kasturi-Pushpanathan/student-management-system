package com.kasturi.sms.backend.repository;

import com.kasturi.sms.backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
