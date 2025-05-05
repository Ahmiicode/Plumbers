import React, { useEffect, useState } from 'react';

const ShowBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/booknow') // Update if using a different port
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Date:</strong> {booking.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowBookings;
