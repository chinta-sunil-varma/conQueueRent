const mongoose = require('mongoose');



const resourseSchema=new mongoose.Schema(
    {
       content:[
        {
            identity:String,
            limit:Number,
            title:String,
            des:String

        }
       ]
    }
)

const resourseSchemaModel=mongoose.model('resourceModel',resourseSchema)




module.exports={
    resourseSchemaModel
}

