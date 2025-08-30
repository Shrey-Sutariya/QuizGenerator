const Question=require('../Model/Question');
const User = require('../Model/User');
const Result = require('../Model/Result');

const SubmitTest =async (req,res)=>{
    const User_input = req.body.UserRes;
    const testid = req.body.id;
    let correct = 0;
    const user_id = req.userId;
    const False  = []

    console.log(user_id);
    
    const test=await Question.findOne({
        _id:testid,  UserID: user_id
    })
    if(test.Status=="Completed"){
        return res.status(200).json({
            msg : "Completed"
        })
    }
    await Question.findOneAndUpdate(
        { _id: testid, UserID: user_id },
        { $set: { Status: "Completed" } },
        
      );
      
    console.log("test",test);
    
    Object.entries(User_input).map(([key,val])=>{
        const correctAns = test.Questions[key-1].Answer
        if(val==correctAns){
            correct++;
        }else{
            False.push({
                Question : test.Questions[key-1],
                UserInput : val,
                CorrectAns : correctAns
            })
        }
        
        
    })
    
    
    const ans = await Result.create({
        UserID : user_id,
        TestId : testid,
        Score : correct,
        Summary : False
    })
    
    res.status(200).json({
        msg : "You score details",
        id : ans._id,
        score : correct,
        Summary : False
    })
}

module.exports=SubmitTest;