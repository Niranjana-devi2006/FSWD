import React, { useState } from "react";

const TaskDashboard = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <>
      {/* CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(120deg, #89f7fe, #66a6ff);
            min-height: 100vh;
          }

          .container {
            width: 400px;
            margin: 50px 650px;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          h2 {
            text-align: center;
            margin-bottom: 15px;
          }

          .input-box {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
          }

          input[type="text"] {
            flex: 1;
            padding: 8px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }

          button {
            padding: 8px 12px;
            border: none;
            border-radius: 6px;
            background: #66a6ff;
            color: white;
            cursor: pointer;
          }

          button:hover {
            background: #4a90e2;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #f2f6ff;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 8px;
          }

          li.completed span {
            text-decoration: line-through;
            color: #777;
          }

          .delete {
            background: #ff6b6b;
            border: none;
            padding: 6px 10px;
            border-radius: 5px;
            cursor: pointer;
          }

          .delete:hover {
            background: #e63946;
          }

          .empty {
            text-align: center;
            color: #777;
          }
        `}
      </style>

      <div className="container">
        <h2>📝 Task Dashboard</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>

        {tasks.length === 0 ? (
          <p className="empty">No tasks added</p>
        ) : (
          <ul>
            {tasks.map((t) => (
              <li
                key={t.id}
                className={t.completed ? "completed" : ""}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleComplete(t.id)}
                    style={{ marginRight: "8px" }}
                  />
                  <span>{t.text}</span>
                </div>
                <button className="delete" onClick={() => deleteTask(t.id)}>
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskDashboard;
