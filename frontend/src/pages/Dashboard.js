import { Link } from "react-router-dom";

function Dashboard(){

return(

<div style={{padding:"40px"}}>

<h1>SkillSwap Dashboard</h1>

<Link to="/add-skill">
<button>Add Skill</button>
</Link>

<br/><br/>

<Link to="/skills">
<button>View Skills</button>
</Link>

</div>

);

}

export default Dashboard;