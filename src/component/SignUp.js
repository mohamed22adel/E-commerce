import login from "./login.css";
import { Link } from "react-router-dom";
export default function SignUp(){
    return(
        <div className="container">
            <div className="signup_container">
        <div className="signup_paragraph">
            <p>Start for free</p>
            <h2>Sign Up to Storeish</h2>
        </div>

        <form>
        <label>Name</label>
            <input type="text" placeholder="Enter your Name" required/>

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required/>

            <label>password</label>
            <input type="password" placeholder="Your password" required/>

            <button>Create Account</button>
        </form>

        <div className="signup_paragraph2">
            <p>Already have an account?</p>
            <Link to="/Log In"><p style={{color:'darkorange'}}>Log In</p></Link>
        </div>

        </div>
        </div>
    );
}