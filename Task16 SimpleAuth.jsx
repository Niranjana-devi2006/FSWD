import React, { useState } from "react";

export default function SimpleAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials
    const correctUser = "admin";
    const correctPass = "1234";

    if (!username || !password) {
      alert("All fields are required!");
      return;
    }

    if (username !== correctUser || password !== correctPass) {
      alert("Invalid username or password!");
    } else {
      alert("Login successful! Welcome 👋");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="bg">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>

      {/* CSS */}
      <style>{`
        .bg {
          height: 100vh;
          background: linear-gradient(120deg, #2193b0, #6dd5ed);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          background: white;
          padding: 30px;
          width: 300px;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 10px;
          margin: 12px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #2193b0;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background: #197a96;
        }
      `}</style>
    </div>
  );
}
