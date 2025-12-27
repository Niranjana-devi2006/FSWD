import React, { useState } from "react";

function CabBooking() {
  const [cabDetails, setCabDetails] = useState({
    name: "",
    pickup: "",
    drop: "",
    cabType: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setCabDetails({
      ...cabDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const confirmBooking = window.confirm(
      `Confirm cab booking for ${cabDetails.name} from ${cabDetails.pickup} to ${cabDetails.drop}?`
    );

    if (confirmBooking) {
      setBooked(true);
      alert("Cab Booked Successfully!");
    } else {
      alert("Cab Booking Cancelled!");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>🚖 Online Cab Booking</h2>

        <form onSubmit={handleBooking} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Passenger Name"
            value={cabDetails.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={cabDetails.pickup}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            value={cabDetails.drop}
            onChange={handleChange}
            required
          />

          <select
            name="cabType"
            value={cabDetails.cabType}
            onChange={handleChange}
            required
          >
            <option value="">Select Cab Type</option>
            <option value="Mini">Mini</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </select>

          <button type="submit">Book Cab</button>
        </form>

        {booked && (
          <div style={styles.card}>
            <h3>Booking Details</h3>
            <p><strong>Name:</strong> {cabDetails.name}</p>
            <p><strong>Pickup:</strong> {cabDetails.pickup}</p>
            <p><strong>Drop:</strong> {cabDetails.drop}</p>
            <p><strong>Cab Type:</strong> {cabDetails.cabType}</p>
            <p style={{ color: "green" }}>Status: Confirmed</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542362567-b07e54358753')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "380px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    fontFamily: "Arial",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    margin:"0px 440px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    
    margin:"20px 440px",
    padding: "12px",
    borderRadius: "5px",
    backgroundColor: "#f1f1f1",
  },
};

export default CabBooking;

