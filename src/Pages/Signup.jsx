import { Link } from "react-router-dom";
// Css
import '../Css/Auth.css'

const Signup = () => {
    return ( 
        <div className="signup">
            <div className="signupCard">
                <div className="signupTitle">Welcome to Eazy Options</div>
                <div className="signupText mt-4">Sign Up</div>
                <input type="email" placeholder="Enter your Email" className="signupInput" />
                <input type="password" placeholder="Password" className="signupInput" />
                <input type="password" placeholder="Confirm Password" className="signupInput" />
                <input type="submit" value="Sign up" className="signupButton" />
                <div className="referalLink"><Link to="/signup" className="text-decoration-none" >Already have an account? Login</Link></div>
                <div className="referalLink"><Link to="/" className="text-decoration-none" >Back to Home</Link></div>
            </div>
        </div>
    );
}
 
export default Signup;