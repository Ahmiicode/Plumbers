const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors()); // ✅ Enable CORS
app.use(express.json());

connectDB();

const bookNowRoute = require('./routes/bookNowRoute');
const contactUsRoute = require('./routes/contactUsRoute');

app.use('/api/booknow', bookNowRoute);
app.use('/api/form', contactUsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
