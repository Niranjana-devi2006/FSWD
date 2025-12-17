import bgImg from "../../assets/indiamap.jpg";
import React from "react";

export default function OnlineQuiz() {

  function calculateMark() {
    let score = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "a") score++;

    alert("Your Score is " + score + " / 5");
  }

  return (
    <>
      <style>{`
        .quiz-box {
          width: 400px;
          margin: 40px 450px ;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          font-family: Arial;
          background-size: cover;
          background-position: center;
        }
        h1 {
          text-align: center;
          color: #000;
        }
        .question {
          margin-top: 15px;
          font-weight: bold;
        }
        label {
          display: block;
          margin-left: 10px;
        }
        button {
          margin-top: 20px;
          padding: 10px;
          width: 100%;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      `}</style>

      <div
        className="quiz-box"
        style={{
          backgroundImage: `url(${bgImg})`
        }}
      >
        <h1>National Quiz</h1>

        <div className="question">1. Capital of India?</div>
        <label><input type="radio" name="q1" value="a" /> Mumbai</label>
        <label><input type="radio" name="q1" value="b" /> New Delhi</label>
        <label><input type="radio" name="q1" value="c" /> Chennai</label>
        <label><input type="radio" name="q1" value="d" /> Agra</label>

        <div className="question">2. National tree of India?</div>
        <label><input type="radio" name="q2" value="a" /> Neem</label>
        <label><input type="radio" name="q2" value="b" /> Banyan</label>
        <label><input type="radio" name="q2" value="c" /> Banana</label>
        <label><input type="radio" name="q2" value="d" /> Apple</label>

        <div className="question">3. National bird of India?</div>
        <label><input type="radio" name="q3" value="a" /> Sparrow</label>
        <label><input type="radio" name="q3" value="b" /> Peacock</label>
        <label><input type="radio" name="q3" value="c" /> Chick</label>
        <label><input type="radio" name="q3" value="d" /> Hen</label>

        <div className="question">4. National game of India?</div>
        <label><input type="radio" name="q4" value="a" /> Hockey</label>
        <label><input type="radio" name="q4" value="b" /> Kabaddi</label>
        <label><input type="radio" name="q4" value="c" /> Cricket</label>
        <label><input type="radio" name="q4" value="d" /> Football</label>

        <div className="question">5. National food of India?</div>
        <label><input type="radio" name="q5" value="a" /> Khichdi</label>
        <label><input type="radio" name="q5" value="b" /> Poori</label>
        <label><input type="radio" name="q5" value="c" /> Dosa</label>
        <label><input type="radio" name="q5" value="d" /> Idly</label>

        <button onClick={calculateMark}>Submit</button>
      </div>
    </>
  );
}

