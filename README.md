# Placement & Skill Management System

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-Cloud%20Database-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![CI/CD](https://img.shields.io/badge/GitHub%20Actions-Automated%20Deploy-2088FF?style=flat&logo=githubactions&logoColor=white)](https://github.com/features/actions)

## 📌 Project Overview
The **Placement & Skill Management System** is a full-stack web application designed for academic departments, placement training cells, and students. It streamlines student record tracking, technical skill proficiency audits, and recruitment readiness analytics, featuring an automated **CI/CD deployment pipeline** powered by GitHub Actions.

---

## 🎯 Problem Statement & Objectives
- **Manual Tracking Overheads:** Placement cells often struggle with fragmented spreadsheets for student certifications, GPA metrics, and technical skill sets.
- **Lack of Placement Visibility:** Recruiters and academic advisors require instantaneous querying of eligible candidates filtered by department and verified skillsets.
- **Objectives:**
  1. Build a modern Single Page Application (SPA) frontend with React and Vite.
  2. Implement a RESTful backend API in Express.js connected to a cloud-managed MongoDB Atlas cluster.
  3. Provide full CRUD operations for registering students, updating technical competencies, and managing placement status.
  4. Automate frontend build and deployment workflows via GitHub Actions.

---

## 🛠️ Technologies Used
- **Frontend:** React 18, Vite, Modern CSS (Responsive Design), ESLint
- **Backend:** Node.js, Express.js, CORS, Dotenv
- **Database:** MongoDB Atlas with Mongoose ODM
- **Deployment & CI/CD:** GitHub Actions workflow (`deploy.yml`)

---

## 🚀 Key Features
- **Student Profile Management:** Add, update, view, and organize student records including Roll Number, Department, and Contact details.
- **Skillset & Competency Tracking:** Categorize candidate proficiencies across programming languages, web technologies, and frameworks.
- **RESTful API Service:** Decoupled backend architecture providing clean endpoint design (`/routes/studentRoutes.js`).
- **Cloud Database Persistence:** Seamless cloud persistence using MongoDB Atlas with schema validation.
- **Automated Delivery Pipeline:** GitHub Actions configuration that automatically builds and deploys production artifacts on push.

---

## 📂 Project Folder Structure
```
placement-skill-management/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD deployment workflow
├── .gitignore
├── client/                     # React Frontend SPA
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddStudent.jsx  # Student registration form
│   │   │   ├── Home.jsx        # Landing and metrics view
│   │   │   └── StudentList.jsx # Interactive student directory
│   │   ├── api.js              # Axios / Fetch client abstractions
│   │   ├── App.jsx             # Route definitions and layout
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── server/                     # Express.js REST API
    ├── .env.example
    ├── models/
    │   └── Student.js          # Mongoose Student data schema
    ├── routes/
    │   └── studentRoutes.js    # RESTful API routing controllers
    ├── package.json
    └── server.js               # Application entrypoint & DB connection
```

---

## 💻 Installation & Execution Instructions

### Prerequisites
- Node.js (v18+) and npm installed
- Active MongoDB Atlas connection URI or local MongoDB instance

### 1. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Configure PORT and MONGODB_URI in your .env
npm start
```
*Backend runs on `http://localhost:5000`*

### 2. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173`*

---

## 🔮 Future Enhancements
- Resume PDF parsing and automated skill extraction.
- Role-based authentication (Admin / Placement Officer / Student).
- Recruiter portal with instant CSV export of filtered eligible candidates.
