const express = require('express')

const {resourseSchemaModel} =require("../../models/Resource.js")

 

const router=express.Router()



router.get('/list', async (req,res)=>
{
    console.log('triggered')
    const data= await resourseSchemaModel.find({});

    console.log(data);
    res.send( data);

})

module.exports=router