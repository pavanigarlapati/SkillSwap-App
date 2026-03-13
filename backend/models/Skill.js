const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String,
required:true
},

category:{
type:String,
required:true
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Skill",SkillSchema);