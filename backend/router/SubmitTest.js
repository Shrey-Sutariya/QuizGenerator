const controller = require('../controller/Submit')
const jwt_mw = require('../midleware/JwtAuth')
const express = require('express')
const app=express();

app.use(express.json());
app.use(jwt_mw);
app.post('/Submit',controller);

module.exports=app;