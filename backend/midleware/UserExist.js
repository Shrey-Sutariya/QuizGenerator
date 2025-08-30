const User=require('../Model/User')

const UserCheck = async (req,res,next)=>{
    const username=req.body.username;
    const password = req.bedy.password;

    try{
        const existingUser = await User.findOne({
            username,
            password
        })
        if(existingUser){
            next();
        }else{
            return res.status(400).json({
                msg:"user not exist please signup"
            })
        }
    }catch(err){
        console.log(err);
        
    }
}
module.exports=UserCheck;