const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true
    },

    registerNumber: {
      type: String,
      required: true
    },

    technicalSkills: {
      type: String,
      required: true
    },

    aptitudeScore: {
      type: Number,
      required: true
    },

    communicationSkills: {
      type: String,
      required: true
    },

    placementReadiness: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);