const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req,res) => {
  res.json({ msg: 'Welcome...' });
});

//Define Routes
app.use('/logs', require('./routes/logs'));
app.use('/techs', require('./routes/techs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serevr started on port ${PORT}`));