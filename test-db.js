require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

console.log("Attempting to connect...");
console.log("URI prefix:", uri ? uri.substring(0, 30) + "..." : "UNDEFINED!");

mongoose
  .connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
    console.log("Connection state:", mongoose.connection.readyState);
    console.log("Database name:", mongoose.connection.db.databaseName);
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection FAILED:");
    console.error("Error name:", err.name);
    console.error("Error message:", err.message);
    process.exit(1);
  });
