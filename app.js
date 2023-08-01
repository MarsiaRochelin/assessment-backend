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

//GET /items
//define path + method and handler
//catch errors
app.get("/items", (req, res) => {
  try {
    res.status(200).json({ data: menuItems });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//GET /items/:id
app.get("/items/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const item = menuItems.find((item) => item.id === id);
    console.log(item);
    if (item) {
      res.status(200).json({ data: item });
      console.log(id);
    } else {
      res.status(404).json({ error: `No item with id of ${id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// EXPORT //
module.exports = app;
