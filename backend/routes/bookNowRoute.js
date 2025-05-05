const express = require('express');
const Booking = require('../models/booknow');
const router = express.Router();

// POST route to handle Book Now form
// POST route to handle Book Now form
router.post('/', async (req, res) => {
  const { name, email, phone, subject, date, message } = req.body;

  if (!name || !email || !phone || !subject || !date || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }
  
  const newBooking = new Booking({
    name,
    email,
    phone,
    service: subject, // map subject to service
    date,
    time: message     // map message to time
  });
  

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json({ success: true, message: 'Booking successfully created!', booking: savedBooking });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
});

module.exports = router;
