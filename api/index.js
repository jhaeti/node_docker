const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>From Node Server</h1>");
});

app.listen(port, console.log(`Server running on port ${port}`));
