import React, { useState } from "react";

export default function StudentFeedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submitFeedback = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    if (comment.length < 5) {
      alert("Please enter a proper comment");
      return;
    }

    alert(`Thank you for your feedback!\nRating: ${rating} stars`);
    setRating(0);
    setComment("");
  };

  return (
    <div className="bg">
      <form className="feedback-card" onSubmit={submitFeedback}>
        <h2>Student Feedback</h2>

        {/* Rating */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "active" : ""}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comment */}
        <textarea
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Submit Feedback</button>
      </form>

      {/* CSS */}
      <style>{`
        .bg {
          height: 100vh;
          background: linear-gradient(120deg, #ff9a9e, #fad0c4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .feedback-card {
          background: white;
          width: 320px;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          margin:0px 400px;
        }

        h2 {
          margin-bottom: 15px;
          color: #333;
        }

        .stars {
          margin: 10px 0 15px;
        }

        .stars span {
          font-size: 30px;
          cursor: pointer;
          color: #ccc;
          margin: 0 5px;
        }

        .stars span.active {
          color: gold;
        }

        textarea {
          width: 100%;
          height: 80px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          resize: none;
        }

        button {
          width: 100%;
          padding: 10px;
          margin-top: 15px;
          background: #ff758c;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background: #ff5c7a;
        }
      `}</style>
    </div>
  );
}
