const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://vignesh:vignesh123@sample-cluster-i8oef.mongodb.net/Blog?retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);