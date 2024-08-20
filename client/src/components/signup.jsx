import "./signup.css";
import {Link} from 'react-router-dom';
const Signup = () =>{
    return(
        <>
        <h1 id="statement-head">Budget.<br/>Organize.<br/>Plan Together.</h1>
        <form className="loginForm">
            <h2 id="login-subheader">Sign up in to continue planning your vacation.</h2>
            <button id="google-auth">Log in with Google</button>
            <hr/>
            <input type="text" value="New Username"></input>
            <input type="text" value="New Password"></input>
            <button id="login-btn">Sign up</button>
            <div className="redirection">
                <div>Forgot your <Link to="/" id="username-reset"> <span className="boldedLinks">username</span></Link> or <Link to="/" id="password-reset"><span className="boldedLinks">password</span></Link>?</div>
                <div>Don't have an account? <Link id="signup-link" to="/"><span className="boldedLinks">Sign up now</span></Link></div>
            </div>
        </form>
        </>
    );
}

export default Signup;