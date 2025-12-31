import React, { useState } from "react";

export default function DashboardNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const addNotification = () => {
    setNotifications([
      ...notifications,
      `New notification #${notifications.length + 1}`,
    ]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="bg">
      <div className="dashboard">
        <div className="top-bar">
          <h3>Dashboard</h3>

          <div className="bell" onClick={() => setOpen(!open)}>
            🔔
            {notifications.length > 0 && (
              <span className="count">{notifications.length}</span>
            )}
          </div>
        </div>

        <button className="add-btn" onClick={addNotification}>
          Add Notification
        </button>

        {open && (
          <div className="dropdown">
            <h4>Notifications</h4>

            {notifications.length === 0 ? (
              <p className="empty">No notifications</p>
            ) : (
              notifications.map((note, index) => (
                <p key={index} className="note">
                  {note}
                </p>
              ))
            )}

            {notifications.length > 0 && (
              <button className="clear-btn" onClick={clearNotifications}>
                Clear All
              </button>
            )}
          </div>
        )}
      </div>

      {/* CSS */}
      <style>{`
        .bg {
          height: 100vh;
          background: linear-gradient(120deg, #141e30, #243b55);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dashboard {
          background: white;
          width: 360px;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          position: relative;
          margin:0px 420px;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bell {
          font-size: 22px;
          cursor: pointer;
          position: relative;
        }

        .count {
          position: absolute;
          top: -8px;
          right: -10px;
          background: red;
          color: white;
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 50%;
        }

        .add-btn {
          width: 100%;
          margin: 20px 0;
          padding: 10px;
          background: #243b55;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .dropdown {
          background: #f5f6fa;
          padding: 15px;
          border-radius: 10px;
          animation: slide 0.3s ease;
        }

        @keyframes slide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .note {
          background: white;
          padding: 8px;
          border-radius: 6px;
          margin: 6px 0;
          font-size: 14px;
        }

        .empty {
          font-size: 14px;
          color: #777;
        }

        .clear-btn {
          margin-top: 10px;
          width: 100%;
          padding: 8px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
