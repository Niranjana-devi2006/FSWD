import React, { useState } from "react";

const StudentDashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", course: "Computer Science", year: "2nd" },
    { id: 2, name: "Jane Smith", course: "Information Technology", year: "3rd" },
    { id: 3, name: "Alex Brown", course: "Mechanical", year: "1st" },
  ]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const addStudent = (e) => {
    e.preventDefault();
    const form = e.target;

    const newStudent = {
      id: students.length + 1,
      name: form.name.value,
      course: form.course.value,
      year: form.year.value,
    };

    setStudents([...students, newStudent]);
    setShowModal(false);
    form.reset();
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          background: #f1f5f9;
        }

        .dashboard {
          display: flex;
          height: 100vh;
        }

        /* Sidebar */
        .sidebar {
          width: 240px;
          background: linear-gradient(180deg, #1e293b, #0f172a);
          color: white;
          padding: 20px;
        }

        .sidebar h2 {
          text-align: center;
          margin-bottom: 30px;
          letter-spacing: 1px;
        }

        .sidebar button {
          width: 100%;
          background: none;
          border: none;
          color: #cbd5e1;
          padding: 12px;
          margin-bottom: 10px;
          text-align: left;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .sidebar button:hover {
          background: #334155;
          color: white;
          transform: translateX(6px);
        }

        .sidebar .active {
          background: #2563eb;
          color: white;
        }

        /* Main */
        .main {
          flex: 1;
          padding: 25px;
          overflow-y: auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header h1 {
          font-size: 26px;
        }

        .btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
          font-size: 14px;
        }

        .btn:hover {
          background: #1d4ed8;
          transform: scale(1.05);
        }

        /* Search */
        .search {
          margin-bottom: 15px;
        }

        .search input {
          width: 300px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
        }

        /* Card */
        .card {
          background: white;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          animation: fadeIn 0.4s ease;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 14px;
          border-bottom: 1px solid #e5e7eb;
          text-align: left;
        }

        th {
          background: #f8fafc;
        }

        tr:hover {
          background: #f1f5f9;
        }

        /* Modal */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 25px;
          border-radius: 14px;
          width: 360px;
          animation: slideUp 0.3s ease;
        }

        .modal-content h3 {
          margin-bottom: 15px;
        }

        .modal-content input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>StudentSys</h2>
          {["Dashboard", "Students", "Courses", "Settings"].map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="main">
          <div className="header">
            <h1>{active}</h1>
            <button className="btn" onClick={() => setShowModal(true)}>
              + Add Student
            </button>
          </div>

          <div className="search">
            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Student</h3>
            <form onSubmit={addStudent}>
              <input name="name" placeholder="Student Name" required />
              <input name="course" placeholder="Course" required />
              <input name="year" placeholder="Year" required />
              <div className="modal-actions">
                <button className="btn" type="submit">Add</button>
                <button
                  className="btn"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentDashboard;
