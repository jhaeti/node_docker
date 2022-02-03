const express = require("express");
const app = express();

const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/nodeDocker";

mongoose.set("useCreateIndex", true);
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("MongoDb connected...")
);

app.use(express.json({ extended: false }));

app.use("/api", require("./router"));

app.get("/", (req, res) => {
    res.send("<h1>From Node Server</h1>");
});

module.exports = app;
