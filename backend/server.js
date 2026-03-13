const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/skillswap")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("SkillSwap API Running");
});

app.use("/api/users", userRoutes);
app.use("/api/skills",skillRoutes);
app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});