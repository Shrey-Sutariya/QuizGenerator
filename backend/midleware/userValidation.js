const validator = require('../Validator/Validation');
const {ZodError} = require('zod');
const User = require('../Model/User')

const MW_UserValidation = async (req,res,next)=>{
    console.log(req.body);
    
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;

    try {
        
        validator.safeParse({
            username:username,
            firstname:firstname,
            lastname:lastname,
            password:password,
            email:email
        })
        console.log("Zod Passed");
        
        
        
        next();
    }catch(err){
        
        if (err instanceof ZodError) {
            return res.status(400).json({
              msg: "Validation failed",
              errors: err.errors,
            });
    }
}
}

module.exports=MW_UserValidation;