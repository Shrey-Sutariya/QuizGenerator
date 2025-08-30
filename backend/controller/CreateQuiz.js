const { Groq } = require('groq-sdk');
const ParseJson=require('./ParseJson')
const QuestionSchema = require('../Model/Question');
const User = require('../Model/User');
require("dotenv").config();


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});


const run = async (Topic,level) => {
  try {
    const chatCompletion = 
    await groq.chat.completions.create({
      model: "llama3-8b-8192", 
      messages: [
        {
          role: "user",
          content: `Please create quiz on the ${Topic} with difficulty level ${level} which has 4 options and Answer`,
        },
      ],
      temperature: 0.7,
      max_tokens: 512,
      top_p: 1,
      stream: true, 
    });

    let AI_Res=""
    for await (const chunk of chatCompletion) {
       
        
        AI_Res+=(chunk.choices[0]?.delta?.content || '');
    }
    
    
    const Quiz = ParseJson(AI_Res)
    
    return Quiz

  } catch (error) {
    console.error("❌ Error:", error.message);
  }
};



const CreateQuiz = async (req,res)=>{
    console.log("CreateQuiz Route Hit");
    
    

    
    const userid=req.userId;
    const Topic = req.body.Topic;
    const level= req.body.Level;

    console.log(Topic, " ", level);
    
   
   

    let U_Q_id = []
    try{
        let Quiz_Questions;
        let cnt=3;
        let flag=0;
        while(cnt--){
          Quiz_Questions= await run(Topic,level);
          console.log(cnt," ",Quiz_Questions);
          
          if(Quiz_Questions.length!=0){
            flag=1;
            break;
          }
        }
        if(flag==0){
          return res.status(404).json({
            msg : "Unable to create Quiz"
          })
        }
        const TestNo = await QuestionSchema.findOne({UserID:userid},"TestNumber").sort({TestNumber:-1}).exec();
  
        const Test_Number = TestNo ? TestNo.TestNumber + 1 : 1;
        const Questions = []
        for(let x of Quiz_Questions){
          Questions.push({
            Q_no : x.number,
            Question : x.question,
            Option : x.options,
            Answer : x.answer
          })

        }
        
        const Q = await QuestionSchema.create({
        UserID:userid,
        Questions : Questions,
        TestNumber : Test_Number,
        Status : "Pending",
        Topic : Topic,
        Difficulty : level
        })

        res.status(200).json({
          Quiz : Q,
          Data : U_Q_id
      })
    }catch (error) {
      console.error("❌ Error:", error.message);
    }
    
    
       
   
    
}

module.exports=CreateQuiz;
 