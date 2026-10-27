import { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    studentName: "",
    registerNumber: "",
    technicalSkills: "",
    aptitudeScore: "",
    communicationSkills: "",
    placementReadiness: ""
  });

  // GET - Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/students"
      );

      setStudents(response.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // DELETE - Delete student
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/students/${id}`
      );

      alert("Student deleted successfully!");

      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Error deleting student");
    }
  };

  // Start editing
  const startEdit = (student) => {
    setEditingId(student._id);

    setEditData({
      studentName: student.studentName,
      registerNumber: student.registerNumber,
      technicalSkills: student.technicalSkills,
      aptitudeScore: student.aptitudeScore,
      communicationSkills: student.communicationSkills,
      placementReadiness: student.placementReadiness
    });
  };

  // Handle edit input
  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  // PUT - Update student
  const updateStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/students/${editingId}`,
        editData
      );

      alert("Student updated successfully!");

      setEditingId(null);

      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Error updating student");
    }
  };

  return (
    <div className="page">

      <div className="list-container">

        <h2>Student Skill List</h2>

        {students.length === 0 ? (
          <div className="home">
            <h3>No Student Records Found</h3>
            <p>
              Add a student using the Add Student Skills page.
            </p>
          </div>
        ) : (
          students.map((student) => (
            <div
              className="student-card"
              key={student._id}
            >

              <h3>{student.studentName}</h3>

              <p>
                <strong>Register Number:</strong>{" "}
                {student.registerNumber}
              </p>

              <p>
                <strong>Technical Skills:</strong>{" "}
                {student.technicalSkills}
              </p>

              <p>
                <strong>Aptitude Score:</strong>{" "}
                {student.aptitudeScore}
              </p>

              <p>
                <strong>Communication Skills:</strong>{" "}
                {student.communicationSkills}
              </p>

              <p>
                <strong>Placement Readiness:</strong>{" "}
                {student.placementReadiness}
              </p>

              <br />

              <button
                className="edit-btn"
                onClick={() => startEdit(student)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteStudent(student._id)}
              >
                Delete
              </button>

            </div>
          ))
        )}

        {/* UPDATE FORM */}

        {editingId && (
          <div className="edit-form">

            <h2>Update Student</h2>

            <form onSubmit={updateStudent}>

              <div className="form-group">
                <label>Student Name</label>

                <input
                  type="text"
                  name="studentName"
                  value={editData.studentName}
                  onChange={handleEditChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Register Number</label>

                <input
                  type="text"
                  name="registerNumber"
                  value={editData.registerNumber}
                  onChange={handleEditChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Technical Skills</label>

                <input
                  type="text"
                  name="technicalSkills"
                  value={editData.technicalSkills}
                  onChange={handleEditChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Aptitude Score</label>

                <input
                  type="number"
                  name="aptitudeScore"
                  value={editData.aptitudeScore}
                  onChange={handleEditChange}
                  min="0"
                  max="100"
                  required
                />
              </div>

              <div className="form-group">
                <label>Communication Skills</label>

                <select
                  name="communicationSkills"
                  value={editData.communicationSkills}
                  onChange={handleEditChange}
                  required
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Needs Improvement">
                    Needs Improvement
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Placement Readiness</label>

                <select
                  name="placementReadiness"
                  value={editData.placementReadiness}
                  onChange={handleEditChange}
                  required
                >
                  <option value="Ready">Ready</option>
                  <option value="Not Ready">Not Ready</option>
                </select>
              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Update Student
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>

            </form>

          </div>
        )}

      </div>

    </div>
  );
}

export default StudentList;