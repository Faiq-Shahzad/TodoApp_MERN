const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/todoRouters');
const connectDB = require('./config/dbConfig');

const app = express();
const PORT =
  process.env.NODE_ENV == 'test'
    ? process.env.TEST_PORT || 5001
    : process.env.port || 5000;

app.use(express.json());
app.use(cors());

//Connecting to MongoDB
connectDB();

//Getting Routes from todoController
app.use(routes);

app.listen(PORT, () => console.log('Listening on: ', PORT));

module.exports = app;
