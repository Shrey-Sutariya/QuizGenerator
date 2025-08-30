const express = require('express')
const app = express()
const Signin = require('./router/Signin')
const SignUp = require('./router/SignUp')
const CreateQuiz = require('./router/CreateQuiz')
const Submit = require('./router/SubmitTest')
const TestDetails = require('./router/TestDetails')
const userdetails=require('./router/UserDetails')
const Result=require('./router/Result')
require('dotenv').config();
const cors=require("cors")

const mongo = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(cors())
app.post('/SignUp',SignUp);
app.post('/SignIn',Signin);
app.post('/CreateQuiz',CreateQuiz)
app.post('/Submit',Submit)
app.get('/TestDetails',TestDetails)
app.get('/Userdetails',userdetails)
app.get('/Result',Result)
app.listen(3000,()=>{
    console.log(`Your app is running on port 3000`);
    
})