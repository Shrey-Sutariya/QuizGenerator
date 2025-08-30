const zod=require('zod');


const UserSchema = zod.object({
    username : zod.string().min(2),
    firstname : zod.string().min(2),
    lastname : zod.string().min(2),
    password : zod.string().min(6),
    email : zod.string().email()
})

module.exports = UserSchema