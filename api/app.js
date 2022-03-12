const express = require("express");
const app = express();
require("dotenv").config();
// require("./db");

const bookName = process.env.BOOK_NAME;
app.use(express.json({ extended: false }));

app.use("/api", require("./router"));

app.get("/", (req, res) => {
    res.send(`<h1>Now Every thing WORKS.<br> ${bookName}</h1>`);
});

module.exports = app;
