import React, { useState } from "react";

function HotelReservation() {
  const [details, setDetails] = useState({
    name: "",
    roomType: "",
    nights: "",
  });

  const [reserved, setReserved] = useState(false);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleReserve = (e) => {
    e.preventDefault();

    // Confirm dialog box
    const confirmReservation = window.confirm(
      `Confirm reservation for ${details.name} in a ${details.roomType} room?`
    );

    if (confirmReservation) {
      setReserved(true);

      // Alert dialog box
      alert("Hotel Room Reserved Successfully!");
    } else {
      alert("Reservation Cancelled!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🏨 Hotel Reservation System</h2>

      <form onSubmit={handleReserve} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Guest Name"
          value={details.name}
          onChange={handleChange}
          required
        />

        <select
          name="roomType"
          value={details.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Deluxe">Deluxe</option>
        </select>

        <input
          type="number"
          name="nights"
          placeholder="Number of Nights"
          value={details.nights}
          onChange={handleChange}
          required
        />

        <button type="submit">Reserve Room</button>
      </form>

      {reserved && (
        <div style={styles.card}>
          <h3>Reservation Details</h3>
          <p><strong>Guest Name:</strong> {details.name}</p>
          <p><strong>Room Type:</strong> {details.roomType}</p>
          <p><strong>Nights:</strong> {details.nights}</p>
          <p style={{ color: "green" }}>Status: Confirmed</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "360px",
    margin: "50px 450px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#f7f7f7",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    marginTop: "20px",
    padding: "12px",
    border: "1px solid #aaa",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
};

export default HotelReservation;
