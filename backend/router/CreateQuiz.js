const controller = require('../controller/CreateQuiz')
const jwt_mw = require('../midleware/JwtAuth')
const express = require('express')
const app=express();

app.use(express.json());
app.use(jwt_mw);
app.post('/CreateQuiz',controller);

module.exports=app;