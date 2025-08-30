const controller = require('../controller/SignIn')
const jwt_mw = require('../midleware/JwtAuth')
const express = require('express')
const app=express();

app.use(express.json());

app.post('/SignIn',controller);

module.exports=app;