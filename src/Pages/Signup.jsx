import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
// Css
import '../Css/Auth.css'

const Signup = () => {
    const { signup } = useAuth()
    const history = useHistory()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [loading,setLoading] = useState()

    function handleLogin(e) {
        e.preventDefault();
        
        if (password!==confirmPassword) {
            console.log("NOT MATCH")
            alert("Confirm Password is not same as Password")
            return
        }
        try {
            setLoading(true)
            signup(email,password)
            history.push('/dashboard')
        } catch {
            alert("Failed to create an account")
        }
        setLoading(false)
    }
    return ( 
        <div className="signup">
            <div className="signupCard">
                <div className="signupTitle">Welcome to Eazy Options</div>
                <div className="signupText mt-4">Sign Up</div>
                <form onSubmit={(e)=>{handleLogin(e)}}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        className="signupInput"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="signupInput"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <input
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        className="signupInput"
                        onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }}
                    />
                    <div className="flex items-center mt-3 justify-center">
                        <button
                            disabled={loading}
                            type="submit"
                            className="signupButton"
                            value="Signup"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="referalLink"><Link to="/signup" className="text-decoration-none" >Already have an account? Login</Link></div>
                <div className="referalLink"><Link to="/" className="text-decoration-none" >Back to Home</Link></div>
            </div>
        </div>
    );
}
 
export default Signup;