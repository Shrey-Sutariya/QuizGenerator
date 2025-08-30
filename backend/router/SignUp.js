const controller = require('../controller/SignUp')
const validator = require('../midleware/userValidation')
const express = require('express')
const app=express();


app.use(express.json());
app.use(validator);
app.post('/SignUp',controller);

module.exports=app;