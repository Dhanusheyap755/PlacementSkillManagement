require("dotenv").config();
const dns = require("dns");

// Fix for ISP / Wi-Fi DNS querySrv ECONNREFUSED issue
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  console.log("Could not set custom DNS servers:", e.message);
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/placementDB";

mongoose
  .connect(MONGO_URI)
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
