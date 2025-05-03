const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST route to handle Contact Us form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation for fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.'
    });
  }

  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    const savedContact = await newContact.save();
    res.status(201).json({
      success: true,
      message: 'Contact submitted successfully.',
      data: savedContact,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form: ' + err.message,
    });
  }
});

module.exports = router;

