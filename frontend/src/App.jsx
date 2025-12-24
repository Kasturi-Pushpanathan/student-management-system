import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentProgressForm from "./components/StudentProgressForm";

function App() {
  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm />
      <hr />
      <StudentList />
      <hr />
      <StudentProgressForm />
    </div>
  );
}

export default App;
