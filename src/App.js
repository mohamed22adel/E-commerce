import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import About from "./component/About";
import Profile from "./component/Profile";
/*import { Routes, Route } from "react-router-dom";*/



export default function App(){
    return(
        
<div>

<Nav/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Log In" element={<Login/>}/>
    <Route path="/Sign Up" element={<SignUp/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
</Routes>
<Profile/>
<Footer/>
</div>
    );
}

/*<i className="fa-solid fa-star"></i> */

/*<i class="fa-solid fa-paper-plane"></i> contact send*/ 
/*<i class="fa-solid fa-envelope"></i> signin message*/
/*<i class="fa-solid fa-user"></i> signin user */
/*<i class="fa-solid fa-lock"></i> signin locker */
/*<i class="fa-solid fa-phone-volume"></i> contact telephone */
/*<i class="fa-solid fa-house"></i> contact home address */