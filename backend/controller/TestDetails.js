const QuestionSchema = require('../Model/Question');

const TestDetails = async (req,res)=>{
    const userId = req.userId;
    const TestId = req.query.id || null;

    const filter = { UserID: userId };

    
    if (TestId) {
      filter._id = TestId;
    }
   
    const Test = await QuestionSchema.find(
      filter,
      { "Questions.Answer": 0 } 
    );
    console.log(Test[0].Status);
    
    if(Test[0].Status=="Completed"){
        await QuestionSchema.findOneAndUpdate(
            { _id: TestId, UserID: userId },
            { $set: { Status: "Pending" } },
            
          );
    }
    res.status(200).json({
        test : Test
    })
}

module.exports=TestDetails