"use strict"
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult} = require('express-validator');
const ejs= require("ejs");
const app = express();

const port = process.env.port || 4444;
app.set('view engine','ejs');
const index = require("./routes/index");
const owner = require("./routes/owner");
const driver = require("./routes/driver");
const user = require("./routes/user");

app.use(express.static(__dirname + '/public'));
app.use('/index', index);
app.use('/owner', owner);
app.use('/driver', driver);
app.use('/user', user);

app.listen(8080,()=>{
  console.log('server running  : http://localhost:8080');
});