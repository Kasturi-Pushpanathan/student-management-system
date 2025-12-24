package com.kasturi.sms.backend.service;

import com.kasturi.sms.backend.entity.Student;
import com.kasturi.sms.backend.entity.StudentProgress;
import com.kasturi.sms.backend.repository.StudentProgressRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentProgressService {

    private final StudentProgressRepository progressRepository;

    public StudentProgressService(StudentProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }

    public String calculateRisk(StudentProgress progress) {
        double avg = (progress.getAttendancePercentage()
                + progress.getAssignmentMarks()
                + progress.getExamMarks()) / 3;

        if (avg < 40) return "HIGH RISK";
        else if (avg < 70) return "MEDIUM RISK";
        else return "LOW RISK";
    }

    public StudentProgress saveProgress(StudentProgress progress) {
        return progressRepository.save(progress);
    }

}
