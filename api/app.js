const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api2", require("./router"));
app.use("/api", require("./router"));
app.get("/", (req, res) => {
    res.send("<h1>From Node Server</h1>");
});

module.exports = app;
