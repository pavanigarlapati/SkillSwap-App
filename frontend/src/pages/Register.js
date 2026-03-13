import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e)=>{
e.preventDefault();

try{

const res = await axios.post(
"http://localhost:5000/api/users/register",
{name,email,password}
);

alert(res.data.message);

// redirect to login page
navigate("/");

}catch(error){
console.log(error);
alert("Registration failed");
}

};

return(

<div className="container">

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
Register
</button>

</form>

<p>
Already have an account?
<a href="/"> Login</a>
</p>

</div>

);
}

export default Register;