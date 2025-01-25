const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');

connectToDb();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("Hello World");
})

app.use('/users', userRoutes);

module.exports = app;