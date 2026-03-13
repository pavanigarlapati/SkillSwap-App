import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddSkill from "./pages/AddSkill";
import Skills from "./pages/Skills";

function App(){

return(

<BrowserRouter>

<div>

<div className="header">
SkillSwap
</div>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/dashboard" element={<Dashboard/>} />

<Route path="/add-skill" element={<AddSkill/>} />

<Route path="/skills" element={<Skills/>} />

</Routes>

</div>

</BrowserRouter>

);

}

export default App;