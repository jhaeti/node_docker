const express = require("express");

const Item = require("./Item");

const route = express.Router();

// Gets all Items and spit in json all the items
route.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

// Post an item to api/items
route.post("/", (req, res) => {
  const { name } = req.body;
  const newItem = new Item({ name });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

module.exports = route;
