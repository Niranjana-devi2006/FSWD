import React, { useState } from "react";

function CourseRegistration() {
  const courses = [
    "Computer Science",
    "Information Technology",
    "Accounting",
    "Finance",
    "Business Management",
  ];

  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCourse === "") return;

    // Prevent duplicate enrollment
    if (enrolledCourses.includes(selectedCourse)) return;

    setEnrolledCourses([...enrolledCourses, selectedCourse]);
    setSelectedCourse("");
  };

  return (
    <div style={styles.container}>
      <h2>Course Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={styles.select}
        >
          <option value="">Select a course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <button type="submit" style={styles.button}>
          Enroll
        </button>
      </form>

      <h3>Enrolled Courses</h3>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul>
          {enrolledCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "40px 480px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial",
    background:"lightblue",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  select: {
    flex: 1,
    padding: "8px",
  },
  button: {
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default CourseRegistration;
