const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

// Add new skill
router.post("/add", async(req,res)=>{

try{

const skill = new Skill(req.body);

await skill.save();

res.json({
message:"Skill added successfully",
skill:skill
});

}catch(error){

res.status(500).json({
error:error.message
});

}

});

// Get all skills
router.get("/all", async(req,res)=>{

try{

const skills = await Skill.find();

res.json(skills);

}catch(error){

res.status(500).json({
error:error.message
});

}

});

module.exports = router;