package com.kasturi.sms.backend.controller;

import com.kasturi.sms.backend.entity.StudentProgress;
import com.kasturi.sms.backend.service.StudentProgressService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin
public class StudentProgressController {

    private final StudentProgressService progressService;

    public StudentProgressController(StudentProgressService progressService) {
        this.progressService = progressService;
    }

    @PostMapping
    public String addProgress(@RequestBody StudentProgress progress) {
        progressService.saveProgress(progress);
        return progressService.calculateRisk(progress);
    }

}
