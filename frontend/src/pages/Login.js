import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e)=>{
e.preventDefault();

try{

const res = await axios.post(
"http://localhost:5000/api/users/login",
{email,password}
);

alert(res.data.message);

// redirect to dashboard
navigate("/dashboard");

}catch(error){
console.log(error);
}

};

return(

<div className="container">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

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
Login
</button>

</form>

<p>
Don't have an account?
<a href="/register"> Register</a>
</p>

</div>

);

}

export default Login;