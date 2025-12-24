import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = { name, email, course };

    const response = await fetch("http://localhost:8080/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });

    const data = await response.json();
    console.log("Student saved:", data);

    // Clear form
    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
