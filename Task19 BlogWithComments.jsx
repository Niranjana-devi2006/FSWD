import React, { useState } from "react";

export default function BlogWithComments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="bg">
      <div className="blog-container">
        {/* Blog Section */}
        <div className="blog">
          <h1>Building Interactive Web Apps</h1>
          <p className="author">By Admin • Sep 2025</p>
          <p>
            This blog explains how to build simple and interactive web
            applications using React. Real-time updates improve user experience
            and engagement.
          </p>
        </div>

        {/* Comments Section */}
        <div className="comments">
          <h3>Comments</h3>

          <form onSubmit={addComment}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>

          <div className="comment-list">
            {comments.length === 0 && (
              <p className="empty">No comments yet</p>
            )}

            {comments.map((c, index) => (
              <div key={index} className="comment">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .bg {
          min-height: 100vh;
          background: #f2f3f7;
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .blog-container {
          background: white;
          width: 800px;
          max-width: 100%;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .blog h1 {
          margin-bottom: 5px;
        }

        .author {
          color: #777;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .comments {
          margin-top: 30px;
        }

        form {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        input {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          padding: 10px 15px;
          background: #4e73df;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .comment {
          background: #f7f8fc;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 8px;
          animation: fade 0.3s ease;
        }

        .empty {
          font-size: 14px;
          color: #777;
        }

        @keyframes fade {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          form {
            flex-direction: column;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
