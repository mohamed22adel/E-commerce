import login from "./login.css";
import { Link } from "react-router-dom";
export default function Login(){
    return(
        <div className="container">
            <div className="login_container">
        <div className="login_paragraph">
            <p>Start for free</p>
            <h2>Sign In to Storeish</h2>
        </div>

        <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required/>

            <label>password</label>
            <input type="password" placeholder="Your password" required/>

            <button>Sign In</button>
        </form>

        <div className="login_paragraph2">
            <p>Don't have any account?</p>
            <Link to="/Sign Up"><p style={{color:'darkorange'}}>Sign Up</p></Link>
        </div>

        </div>
        </div>
    );
}