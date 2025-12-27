import React, { useState } from "react";

function FlightBooking() {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    date: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirm dialog box
    const confirmBooking = window.confirm(
      `Confirm booking for ${formData.name} to ${formData.destination}?`
    );

    if (confirmBooking) {
      setBooked(true);
      alert("Flight Ticket Booked Successfully!");
    } else {
      alert("Booking Cancelled!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>✈️ Flight Ticket Booking</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Passenger Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Ticket</button>
      </form>

      {booked && (
        <div style={styles.card}>
          <h3>Booking Details</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Destination:</strong> {formData.destination}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p style={{ color: "green" }}>Status: Confirmed</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #aaa",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
};

export default FlightBooking;

