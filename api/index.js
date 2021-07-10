const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

const uri = "mongodb://mongo:27017/nodeDocker";

mongoose.set("useCreateIndex", true);
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("MongoDb connected...")
);

app.get("/", (req, res) => {
  res.send("<h1>From Node Server</h1>");
});

app.use(express.json({ extended: false }));

app.use("/api", require("./route"));

app.listen(port, console.log(`Server running on port ${port}`));
