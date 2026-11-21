const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

// CREATE - POST
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);

    const savedStudent = await student.save();

    console.log("\n=================================");
    console.log("      STUDENT ADDED SUCCESSFULLY");
    console.log("=================================");
    console.log("Name              :", savedStudent.studentName);
    console.log("Register Number    :", savedStudent.registerNumber);
    console.log("Technical Skills   :", savedStudent.technicalSkills);
    console.log("Aptitude Score     :", savedStudent.aptitudeScore);
    console.log("Communication      :", savedStudent.communicationSkills);
    console.log("Placement Readiness:", savedStudent.placementReadiness);
    console.log("=================================\n");

    res.status(201).json(savedStudent);
  } catch (error) {
    console.log("Error adding student:", error.message);

    res.status(500).json({
      message: error.message
    });
  }
});


// READ - GET
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    console.log("\n========== STUDENT LIST ==========");

    students.forEach((student, index) => {
      console.log(`\nStudent ${index + 1}`);
      console.log("Name              :", student.studentName);
      console.log("Register Number    :", student.registerNumber);
      console.log("Technical Skills   :", student.technicalSkills);
      console.log("Aptitude Score     :", student.aptitudeScore);
      console.log("Communication      :", student.communicationSkills);
      console.log("Placement Readiness:", student.placementReadiness);
    });

    console.log("\n==================================\n");

    res.status(200).json(students);
  } catch (error) {
    console.log("Error fetching students:", error.message);

    res.status(500).json({
      message: error.message
    });
  }
});


// UPDATE - PUT
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent =
      await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    console.log("\n=================================");
    console.log("      STUDENT UPDATED");
    console.log("=================================");
    console.log("Name              :", updatedStudent.studentName);
    console.log("Register Number    :", updatedStudent.registerNumber);
    console.log("Technical Skills   :", updatedStudent.technicalSkills);
    console.log("Aptitude Score     :", updatedStudent.aptitudeScore);
    console.log("Communication      :", updatedStudent.communicationSkills);
    console.log("Placement Readiness:", updatedStudent.placementReadiness);
    console.log("=================================\n");

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.log("Error updating student:", error.message);

    res.status(500).json({
      message: error.message
    });
  }
});


// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent =
      await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    console.log("\n=================================");
    console.log("      STUDENT DELETED");
    console.log("=================================");
    console.log("Name           :", deletedStudent.studentName);
    console.log("Register Number :", deletedStudent.registerNumber);
    console.log("=================================\n");

    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    console.log("Error deleting student:", error.message);

    res.status(500).json({
      message: error.message
    });
  }
});


module.exports = router;