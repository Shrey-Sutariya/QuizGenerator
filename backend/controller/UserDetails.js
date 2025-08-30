const User = require('../Model/User')
const userdetails = async (req,res)=>{
    const userId= req.userId;
    console.log("userID",userId);
    

    try{
    const username =await User.findOne(
        {
        _id:userId
        },
        {username: 1}
    )
    return res.status(200).json({
        username:username.username
    })
    }catch(err){
        console.error(err)
        return res.status(400).json({
            msg : err.message
        })
    }

}

module.exports=userdetails;