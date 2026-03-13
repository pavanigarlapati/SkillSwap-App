import { useState } from "react";
import axios from "axios";

function AddSkill(){

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [category,setCategory] = useState("");

const handleSubmit = async(e)=>{

e.preventDefault();

try{

const res = await axios.post(
"http://localhost:5000/api/skills/add",
{title,description,category}
);

alert(res.data.message);

}catch(error){
console.log(error);
}

};

return(

<div>

<h2>Add Skill</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Skill Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input
placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
></textarea>

<br/><br/>

<button type="submit">
Add Skill
</button>

</form>

</div>

);

}

export default AddSkill;