const user = require('../Model/User')
const jwt = require('jsonwebtoken');
const {JWT_password} = require('../config')

const signin = async (req,res)=>{
     console.log("Sing-In route hit");
        
        const username = req.body.username;
        const password = req.body.password;
    
       
        try {
            
            
            const existingUser = await user.findOne({username:username,password:password});
            
            if(existingUser){
                const token=jwt.sign({id : existingUser._id},JWT_password)
                return res.status(200).json({
                    msg:`Welcome ${username}`,
                    username : username,
                    token:token    
                });
            } else {
                return res.status(400).json({
                    msg:`${username} not exist, please sign-up first`     
                });
            }
        }catch (err) {
            console.error(err);
            res.status(500).json({ msg: `Error in sign-in of ${username}` });
        }
        
    
}

module.exports=signin