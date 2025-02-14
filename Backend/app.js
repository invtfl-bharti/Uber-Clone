const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDb = require("./db/db");
connectToDb();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captainRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://yourfrontenddomain.com", 
    credentials: true, 
  })
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/users", userRoutes);

app.use("/captains", captainRoutes);

module.exports = app;
