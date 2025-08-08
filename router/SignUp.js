const controller = require('../controller/SignUp')
const jwt_mw = require('../midleware/JwtAuth')
const express = require('express')
const app=express();

app.use(express.json());
app.post('/SignUp',controller);

module.exports=app;