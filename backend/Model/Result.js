const mongoose = require('mongoose');
const User=require('./User')

const ResultSchema = new mongoose.Schema({
    UserID : {
           type: mongoose.Schema.Types.ObjectId,
           ref : 'User',
           required : true
       },
    TestId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Question',
        required : true
    },
    TestNo : Number,
    Score : Number,
    Summary : Array
    
});

module.exports = mongoose.model('Result', ResultSchema);
