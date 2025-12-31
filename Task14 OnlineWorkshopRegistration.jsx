import React, { useState } from "react";

export default function OnlineWorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
  };

  return (
    <div className="bg">
      <div className="container">
        {/* Form */}
        <form className="form" onSubmit={handleSubmit}>
          <h2>Workshop Registration</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            value={workshop}
            onChange={(e) => setWorkshop(e.target.value)}
            required
          >
            <option value="">Select Workshop</option>
            <option value="React Basics">React Basics</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="AI Fundamentals">AI Fundamentals</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {/* Live Preview */}
        <div className="preview">
          <h3>Live Preview</h3>
          <p><strong>Name:</strong> {name || "—"}</p>
          <p><strong>Email:</strong> {email || "—"}</p>
          <p><strong>Workshop:</strong> {workshop || "—"}</p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #667eea, #764ba2);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          display: flex;
          gap: 30px;
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          margin:0px 400px;
        }

        .form {
          width: 280px;
        }

        h2 {
          margin-bottom: 15px;
          color: #333;
        }

        input, select {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .preview {
          width: 240px;
          background: #f5f6ff;
          padding: 20px;
          border-radius: 10px;
        }

        .preview h3 {
          margin-bottom: 10px;
          color: #444;
        }

        .preview p {
          margin: 8px 0;
          color: #555;
        }

        @media (max-width: 700px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
