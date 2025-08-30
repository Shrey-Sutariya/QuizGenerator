const Result_Schema = require('../Model/Result')

const Result = async (req,res)=>{
    const result_id = req.query.id;
    
    
    const Result_data = await Result_Schema.findOne({
        _id:result_id
    })
    if(!Result_data){
        res.status(404).json({
            msg : "No Data Found"
        })
    }
    res.status(200).json({
        Result : Result_data
    })

}

module.exports=Result;
