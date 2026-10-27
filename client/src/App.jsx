import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Student Skills</Link>
        <Link to="/students">Student Skill List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;