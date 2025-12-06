import React from "react";

export default function CollegeApplicationForm() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  }

  return (
    <>
      <style>{`
        

        .overlay {
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background: #f0f0f0;
        }

        
        .form-container {
          width: 350px;
          max-width: 95%;
          background-image: url("https://cdn.create.vista.com/downloads/7a858bf2-38da-450d-a3a4-5176147a7faa_1024.jpeg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.3);

         
        }

        .inner-box {
          background: rgba(255,255,255,0.85);
          padding: 20px;
          border-radius: 10px;
        }

        .inner-box input,
        .inner-box textarea,
        .inner-box select {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border: 1px solid #999;
          color: black !important;
          background: white !important;
          border-radius: 6px;
        }

        
        .radio-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .radio-group label {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: blue;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>

      <div className="overlay">
        <form className="form-container" onSubmit={handleSubmit}>
          
          <div className="inner-box">
            <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
              College Application Form
            </h3>

            <input type="text" placeholder="Name" required />

            <input type="email" placeholder="Email" required />

            <textarea rows="3" placeholder="Address" required />

            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="Male" /> Male
              </label>

              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
            </div>

            <label>Department:</label>
            <select required>
              <option value="">Select</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>

            <label>Upload Resume:</label>
            <input type="file" accept=".pdf,.doc,.docx" />

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>

        </form>
      </div>
    </>
  );
}