const mongoose = require('mongoose');
const User=require('./User')

const QuestionSchema = new mongoose.Schema({

   
    Questions : [
        {
            Q_no: String,
            Question : String,
            Option : {
                A: { type: String},
                B: { type: String},
                C: { type: String},
                D: { type: String}
            },
            Answer : String
            
        }
    ],
    UserID : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    TestNumber : Number,
    Status : String,
    Topic : String,
    Difficulty : String
    
});

module.exports = mongoose.model('Questions', QuestionSchema);
