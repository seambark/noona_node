const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./todolist_demo/todo_back/routes/index");
require("dotenv").config();
const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(5000, () => {
  console.log("server on 5000");
});
