import { useState, useEffect } from "react";

function StudentProgressForm() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [attendance, setAttendance] = useState("");
  const [assignment, setAssignment] = useState("");
  const [exam, setExam] = useState("");
  const [risk, setRisk] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const progress = {
      attendancePercentage: parseFloat(attendance),
      assignmentMarks: parseFloat(assignment),
      examMarks: parseFloat(exam),
      student: { id: parseInt(studentId) },
    };

    const response = await fetch("http://localhost:8080/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progress),
    });

    const data = await response.text(); // backend returns risk string
    setRisk(data);
    setAttendance("");
    setAssignment("");
    setExam("");
    setStudentId("");
  };

  return (
    <div>
      <h2>Student Progress</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Attendance %"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Assignment Marks"
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Exam Marks"
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          required
        />
        <button type="submit">Add Progress</button>
      </form>
      {risk && <p>Risk Indicator: {risk}</p>}
    </div>
  );
}

export default StudentProgressForm;
