const express = require("express");
const mongoose = require("mongoose");
const routes = require('./controllers/todoController')
const cors = require('cors');

require("dotenv").config();

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

const mongoURL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/TODO_App";


//Connecting to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => console.log("connected to MONGO DB"))
  .catch((err) => console.log(err));

//Getting Routes from todoController
app.use(routes);

app.listen(PORT, () => console.log("Listening on: ", PORT));

module.exports = app;