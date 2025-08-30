const User = require('..//Model/User')
const jwt = require('jsonwebtoken');
const {JWT_password} = require('../config')




const SignUp= async (req,res)=>{
    console.log("Sing-Up route hit");
    
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;

   
    try {
         const user=await User.create({ username,firstname,lastname, password, email });
        const userid=user._id;
        const token = jwt.sign({id:userid},JWT_password)

        res.status(201).json({
            user,
            token:token,
            msg: "Added"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error creating user" });
    }
    

}

module.exports=SignUp;