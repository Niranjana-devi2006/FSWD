import React, { useState } from "react";

export default function PaymentForm() {
  const [age, setAge] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!age || !card || !cvv || !amount) {
      setError("All fields are required");
      return;
    }
    if (age < 18) {
      setError("Age must be 18 or above");
      return;
    }
    if (card.length !== 16) {
      setError("Card number must be 16 digits");
      return;
    }
    if (cvv.length !== 3) {
      setError("CVV must be 3 digits");
      return;
    }
    if (amount > 100000) {
      setError("Amount should not exceed 100000");
      return;
    }

    setError("");
    alert("Payment Successful");
  }

  return (
    <>
      <style>{`
        .box {
          width: 280px;
          margin: 50px 480px;
          padding: 20px;
          border-radius: 8px;
          background: #eef4ff;
          font-family: Arial;
          box-shadow: 0 0 10px #ccc;
        }
        input, button {
          width: 100%;
          padding: 8px;
          margin-top: 10px;
        }
        button {
          background: #1976d2;
          color: white;
          border: none;
          cursor: pointer;
        }
        .error {
          color: red;
          font-size: 12px;
        }
      `}</style>

      <div className="box">
        <h3>Payment Form</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Age (18+)"
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="text"
            placeholder="Card Number"
            onChange={(e) => setCard(e.target.value)}
          />

          <input
            type="password"
            placeholder="CVV"
            onChange={(e) => setCvv(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount (≤ 100000)"
            onChange={(e) => setAmount(e.target.value)}
          />

          <p className="error">{error}</p>

          <button type="submit">Pay</button>
        </form>
      </div>
    </>
  );
}


