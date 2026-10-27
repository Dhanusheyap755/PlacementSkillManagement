const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/placementDB")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });


// Test Route
app.get("/", (req, res) => {
  res.send("Placement Skill Monitoring API is running");
});


// Student Routes
app.use("/api/students", studentRoutes);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});