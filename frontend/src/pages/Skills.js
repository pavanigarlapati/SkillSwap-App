import { useEffect,useState } from "react";
import axios from "axios";

function Skills(){

const [skills,setSkills] = useState([]);

useEffect(()=>{

fetchSkills();

},[]);

const fetchSkills = async()=>{

const res = await axios.get(
"http://localhost:5000/api/skills/all"
);

setSkills(res.data);

};

return(

<div>

<h2>Available Skills</h2>

{skills.map((skill)=>(

<div
key={skill._id}
style={{
border:"1px solid #ccc",
padding:"10px",
margin:"10px"
}}
>

<h3>{skill.title}</h3>

<p>{skill.description}</p>

<p>
<b>Category:</b> {skill.category}
</p>

</div>

))}

</div>

);

}

export default Skills;