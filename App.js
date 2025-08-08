const express = require('express')
const app = express()
const Signin = require('./router/Signin')
const SignUp = require('./router/SignUp')

app.post('/SignUp',SignUp);
app.post('/SignIn',Signin);

app.listen(3000,()=>{
    console.log(`Your app is running on port 3000`);
    
})