const controller = require('../controller/UserDetails')
const jwt_mw = require('../midleware/JwtAuth')
const express = require('express')
const app=express();

app.use(express.json());
app.use(jwt_mw);
app.get('/UserDetails',controller);

module.exports=app;