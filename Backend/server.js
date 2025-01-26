const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


app.use(cors());

const server = http.createServer(app);


server.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});

