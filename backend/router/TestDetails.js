const controller = require('../controller/TestDetails')
const jwt_mw = require('../midleware/JwtAuth')
const express = require('express')
const app=express();

app.use(express.json());
app.use(jwt_mw);
app.get('/TestDetails',controller);

module.exports=app;