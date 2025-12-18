import React, { useState } from "react";

const CreativeAttendanceTracker = () => {
  const initialStudents = [
    { roll: "101", name: "Alice Johnson", status: "" },
    { roll: "102", name: "Bob Smith", status: "" },
    { roll: "103", name: "Charlie Brown", status: "" },
    { roll: "104", name: "Diana Prince", status: "" },
  ];

  const [students, setStudents] = useState(initialStudents);

  const markAttendance = (roll, status) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.roll === roll ? { ...student, status } : student
      )
    );
  };

  const presentCount = students.filter(
    (s) => s.status === "Present"
  ).length;

  return (
    <>
      {/* CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
          }

          .attendance-container {
            max-width: 700px;
            margin: 40px 650px;
            background: #ffffff;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          h2 {
            text-align: center;
            margin-bottom: 10px;
            color: #333;
          }

          .summary {
            text-align: center;
            margin-bottom: 20px;
            font-weight: bold;
            color: #555;
          }

          .student-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f9f9f9;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 12px;
            transition: transform 0.2s;
          }

          .student-card:hover {
            transform: scale(1.02);
          }

          .student-info {
            display: flex;
            flex-direction: column;
          }

          .student-name {
            font-weight: 600;
            font-size: 16px;
          }

          .roll {
            font-size: 13px;
            color: #777;
          }

          .options {
            display: flex;
            gap: 10px;
          }

          .option {
            padding: 8px 14px;
            border-radius: 20px;
            border: 2px solid transparent;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
            user-select: none;
          }

          .present {
            background: #e6f9ed;
            color: #1e7e34;
            border-color: #1e7e34;
          }

          .absent {
            background: #fdecea;
            color: #c82333;
            border-color: #c82333;
          }

          .active {
            box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="attendance-container">
        <h2>📋 Attendance Tracker</h2>
        <div className="summary">
          Present: {presentCount} / {students.length}
        </div>

        {students.map((student) => (
          <div className="student-card" key={student.roll}>
            <div className="student-info">
              <span className="student-name">{student.name}</span>
              <span className="roll">Roll No: {student.roll}</span>
            </div>

            <div className="options">
              <div
                className={`option present ${
                  student.status === "Present" ? "active" : ""
                }`}
                onClick={() => markAttendance(student.roll, "Present")}
              >
                ✔ Present
              </div>

              <div
                className={`option absent ${
                  student.status === "Absent" ? "active" : ""
                }`}
                onClick={() => markAttendance(student.roll, "Absent")}
              >
                ✖ Absent
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreativeAttendanceTracker;

