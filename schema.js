const mongoose = require('mongoose')
const blogpostschema = new mongoose.Schema({
    title:{type:String,unique:true,minlength:5},
    content:{type:String,required:true,minlength:50},
    author:{type:String},
    tags:{type:String},
    category:{type:String,default:'General'},
    likes:{type:String},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date}
})


const commentschema = new mongoose.Schema({
    username:{type:String},
    message:{type:String,required:true},
    commentedAt:{type:Date,default:Date.now}

})
const blog = mongoose.model("blogpost",blogpostschema)
const comment = mongoose.model("comments",commentschema)