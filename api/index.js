// const mongoose = require("mongoose");

const app = require("./app");

const port = 3000;

// const uri = "mongodb://mongo:27017/nodeDocker";

// mongoose.set("useCreateIndex", true);
// mongoose.connect(
//   uri,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => console.log("MongoDb connected...")
// );

app.listen(port, console.log(`Server running on port ${port}`));
