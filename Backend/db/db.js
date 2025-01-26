require("dotenv").config();
const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECT || "mongodb://127.0.0.1:27017/uber-clone",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB successfully");
    // process.exit(0); 
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); 
  }
})();

