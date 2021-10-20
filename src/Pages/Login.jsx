import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
// Css
import '../Css/Auth.css'

const Login = () => {
    const { login } = useAuth()
    const history = useHistory()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [loading,setLoading] = useState()

    async function handleLogin(e) {
        e.preventDefault();
        try {
            setLoading(true)
            await login(email,password)
            history.push('/dashboard')
        } catch {
            alert("Failed to Log in")
        }
        setLoading(false)
    }
    return ( 
        <div className="login">
            <div className="glass">
                <div className="loginCard">
                    <div className="loginTitle">Welcome to Eazy Options</div>
                    <div className="loginText mt-4">Log in</div>
                    <form onSubmit={(e)=>{handleLogin(e)}}>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                            className="loginInput"
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your Password"
                            className="loginInput"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />
                        <div className="flex items-center mt-3 justify-center">
                            <button
                                disabled={loading}
                                type="submit"
                                className="loginButton"
                                value="Login"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                    <div className="referalLink"><Link to="/forgotten-password" className="text-decoration-none" >Forgot Password?</Link></div>
                    <div className="referalLink"><Link to="/signup" className="text-decoration-none" >Don't have an account? Sign Up</Link></div>
                    <div className="referalLink"><Link to="/" className="text-decoration-none" >Back to Home</Link></div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;