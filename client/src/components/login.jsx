import "./login.css";
import {Link} from 'react-router-dom';
const Login = () =>{
    return(
        <>
        <h1 id="statement-head">Budget.<br/>Organize.<br/>Plan Together.</h1>
        <form className="loginForm">
            <h2 id="login-subheader">Log in to continue planning your vacation.</h2>
            <button id="google-auth">Log in with Google</button>
            <hr/>
            <input type="text" value="Username"></input>
            <input type="text" value="Password"></input>
            <button id="login-btn">Log In</button>
            <div className="redirection">
                <div>Forgot your <Link to="/" id="username-reset"> <span className="boldedLinks">username</span></Link> or <Link to="/" id="password-reset"><span className="boldedLinks">password</span></Link>?</div>
                <div>Don't have an account? <Link id="signup-link" to="/"><span className="boldedLinks">Sign up now</span></Link></div>
            </div>
        </form>
        </>
    );
}

export default Login;