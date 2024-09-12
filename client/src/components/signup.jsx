import "./signup.css";
import {Link} from 'react-router-dom';
const Signup = () =>{
    return(
        <>
        <h1 id="statement-head">Budget.<br/>Organize.<br/>Plan Together.</h1>
        <form className="loginForm">
            <h2 id="login-subheader">Sign up in to continue planning your vacation.</h2>
            <button id="google-auth-signup">Log in with Google</button>
            <hr/>
            <input className="signupInput" type="text" placeholder="Email Address"></input>
            <input className="signupInput" type="text" placeholder="New Password"></input>
            <button id="signup-btn">Sign up</button> 
            <div className="redirection">
                <div>Have an account already? <Link to="/Login" id="username-reset"> <span className="boldedLinks">Log in now</span></Link></div>
            </div>
        </form>
        </>
    );
}

export default Signup;