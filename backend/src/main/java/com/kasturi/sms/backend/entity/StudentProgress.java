package com.kasturi.sms.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student_progress")
public class StudentProgress {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double attendancePercentage;
    private double assignmentMarks;
    private double examMarks;

    @OneToOne
    @JoinColumn(name = "student_id")
    private Student student;

    public StudentProgress() {}

    public StudentProgress(double attendancePercentage, double assignmentMarks, double examMarks, Student student) {
        this.attendancePercentage = attendancePercentage;
        this.assignmentMarks = assignmentMarks;
        this.examMarks = examMarks;
        this.student = student;
    }

    // Getters and setters
    public Long getId() { return id; }
    public double getAttendancePercentage() { return attendancePercentage; }
    public void setAttendancePercentage(double attendancePercentage) { this.attendancePercentage = attendancePercentage; }
    public double getAssignmentMarks() { return assignmentMarks; }
    public void setAssignmentMarks(double assignmentMarks) { this.assignmentMarks = assignmentMarks; }
    public double getExamMarks() { return examMarks; }
    public void setExamMarks(double examMarks) { this.examMarks = examMarks; }
    public Student getStudent() { return student; }
    public void setStudent(Student student) { this.student = student; }
}
