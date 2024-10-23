const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        requred:true
    },
    description:{
        type:String,
        requred:true
    },
    languages:{
        type:String,
        requred:true
    },
    github:{
        type:String,
        requred:true,
        unique:true
    },
    demo:{
        type:String,
        requred:true
    },
    image:{
        type:String,
        requred:true
    },
    userid:{
        type:String,
        requred:true
    }
})

const projects=mongoose.model('projects',projectSchema)

module.exports=projects