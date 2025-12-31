import React, { useState } from "react";

export default function RoleBasedLogin() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      alert("Please fill all fields");
      return;
    }

    if (role === "admin") {
      alert("Welcome Admin! Redirecting to Admin Dashboard...");
    } else if (role === "user") {
      alert("Welcome User! Redirecting to User Home...");
    }
  };

  return (
    <div className="bg">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>

      {/* CSS */}
      <style>{`
        .bg {
          height: 100vh;
          background: linear-gradient(120deg, #6a11cb, #2575fc);
          display: flex;
          justify-content: center;
          align-items: center;
          background-size:cover;
        }

        .login-card {
          background: white;
          padding: 30px;
          width: 300px;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          text-align: center;
          margin:0px 400px;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
        }

        input, select {
          width: 100%;
          padding: 10px;
          margin: 12px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #2575fc;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background: #1a5ed8;
        }
      `}</style>
    </div>
  );
}
