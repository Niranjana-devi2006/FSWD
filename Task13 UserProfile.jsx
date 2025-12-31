import React, { useState } from "react";

export default function UserProfileEdit() {
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState("Niranjana Devi");
  const [email, setEmail] = useState("niranjana@email.com");
  const [age, setAge] = useState(21);

  const saveProfile = (e) => {
    e.preventDefault();

    if (name.length < 3) return alert("Name too short");
    if (!email.includes("@")) return alert("Invalid email");
    if (age < 18) return alert("Age must be 18+");

    setEdit(false);
    alert("Profile updated!");
  };

  return (
    <div className="bg">
      <div className="profile-card">
        <div className="header">
          <h2>My Profile</h2>
          {!edit && (
            <span className="edit-icon" onClick={() => setEdit(true)}>
              ✏️
            </span>
          )}
        </div>

        <form onSubmit={saveProfile}>
          <div className="field">
            <label>Name</label>
            <input
              value={name}
              disabled={!edit}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              value={email}
              disabled={!edit}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Age</label>
            <input
              type="number"
              value={age}
              disabled={!edit}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {edit && (
            <div className="actions">
              <button type="button" className="cancel" onClick={() => setEdit(false)}>
                Cancel
              </button>
              <button type="submit" className="save">
                Save
              </button>
            </div>
          )}
        </form>
      </div>

      {/* CSS */}
      <style>{`
        .bg {
          height: 100vh;
          background-image: linear-gradient(
              rgba(0,0,0,0.4),
              rgba(0,0,0,0.4)
            ),
            url("https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d");
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-card {
          background: white;
          width: 380px;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          animation: fadeIn 0.6s ease;
          margin:0px 360px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .edit-icon {
          cursor: pointer;
          font-size: 20px;
        }

        .field {
          margin: 15px 0;
          text-align: left;
        }

        label {
          font-size: 13px;
          color: #555;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 8px;
          border: 1px solid #ccc;
          background: #f9f9f9;
        }

        input:disabled {
          background: #eee;
          color: #555;
        }

        .actions {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .save {
          background: #28a745;
          color: white;
          border: none;
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
        }

        .cancel {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

