const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
require("dotenv").config();
const route = require('./routes.js');
const app = express();
const port = 3010;
app.use(express.json());
app.use("/userData" , route);
app.use(express.static('static'));
mongoose.connect(process.env.mongoUrl).then(()=>console.log("Mongo db Connected !")).catch((err)=>console.log("Error Occurred during Connection !"))
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
