import { useState } from "react";
import axios from "axios";

function AddStudent() {

  const [formData, setFormData] = useState({
    studentName: "",
    registerNumber: "",
    technicalSkills: "",
    aptitudeScore: "",
    communicationSkills: "",
    placementReadiness: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/students",
        formData
      );

      alert("Student added successfully!");

      setFormData({
        studentName: "",
        registerNumber: "",
        technicalSkills: "",
        aptitudeScore: "",
        communicationSkills: "",
        placementReadiness: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error adding student");
    }
  };

  return (
    <div className="page">

      <div className="form-container">

        <h2>Add Student Skills</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="form-group">
            <label>Register Number</label>
            <input
              type="text"
              name="registerNumber"
              value={formData.registerNumber}
              onChange={handleChange}
              placeholder="Enter register number"
              required
            />
          </div>

          <div className="form-group">
            <label>Technical Skills</label>
            <input
              type="text"
              name="technicalSkills"
              value={formData.technicalSkills}
              onChange={handleChange}
              placeholder="Java, React, MongoDB"
              required
            />
          </div>

          <div className="form-group">
            <label>Aptitude Score</label>
            <input
              type="number"
              name="aptitudeScore"
              value={formData.aptitudeScore}
              onChange={handleChange}
              placeholder="Enter score"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label>Communication Skills</label>
            <select
              name="communicationSkills"
              value={formData.communicationSkills}
              onChange={handleChange}
              required
            >
              <option value="">Select Level</option>
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
              value={formData.placementReadiness}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Ready">Ready</option>
              <option value="Not Ready">Not Ready</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Add Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddStudent;