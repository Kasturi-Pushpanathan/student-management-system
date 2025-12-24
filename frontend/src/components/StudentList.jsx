import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} | {student.email} | {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
