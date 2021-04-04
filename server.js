const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

// Connect Database
connectDB();

app.get('/', (req,res) => res.send('Welcome...'));

//Define Routes
app.use('/logs', require('./routes/logs'));
app.use('/techs', require('./routes/techs'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Serevr started on port ${PORT}`));