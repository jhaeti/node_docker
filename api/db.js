const mongoose = require("mongoose");

const uri =
    process.env.NODE_ENV === "development"
        ? "mongodb://localhost:27017/nodeDocker"
        : process.env_NODE_ENV === "production"
        ? "mongodb://mongo:27017/nodeDocker"
        : "mongodb://localhost:27017/nodeDocker-test";

mongoose.set("useCreateIndex", true);
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("MongoDb connected...")
);
