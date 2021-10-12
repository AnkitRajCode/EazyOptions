import { Link } from "react-router-dom";
// Css
import '../Css/Auth.css'

const Login = () => {
    return ( 
        <div className="login">
            <div className="loginCard">
                <div className="loginTitle">Welcome to Eazy Options</div>
                <div className="loginText mt-4">Log in</div>
                <input type="email" placeholder="Enter your Email" className="loginInput" />
                <input type="password" placeholder="Enter your Password" className="loginInput" />
                <input type="submit" value="Log in" className="loginButton" />
                <div className="referalLink"><Link to="/forgotpassword" className="text-decoration-none" >Forgot Password?</Link></div>
                <div className="referalLink"><Link to="/signup" className="text-decoration-none" >Don't have an account? Sign Up</Link></div>
                <div className="referalLink"><Link to="/" className="text-decoration-none" >Back to Home</Link></div>
            </div>
        </div>
    );
}
 
export default Login;