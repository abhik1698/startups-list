const express = require("express");
const mongoose = require("mongoose");
const app = express();
var path = require("path");

app.use(express.json());

//Connect to Mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/startups", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.static("public"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
);

const port = 5000;

app.listen(port, () => console.log("Server started on port " + port));
