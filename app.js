//Define the route handlers
const express = require("express");
const cors = require("cors");
const menuItems = require("./menuData.json");
//create an instance of express app
const app = express();

//Set up Middlwear
//Function that will work with req, res before the final route handler funtion
app.use(cors());

// ROUTES //
app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.get("/items", (req, res) => {
  try {
    res.status(200).json({ data: menuItems });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// EXPORT //
module.exports = app;
