const express = require("express");
const app = express();

// require("./db");

app.use(express.json({ extended: false }));

app.use("/api", require("./router"));

app.get("/", (req, res) => {
    res.send("<h1>From Node Server2</h1>");
});

module.exports = app;
