import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

// Css
import '../Css/Auth.css'

const ForgottenPassword = () => {
    const { resetPassword } = useAuth()
    const [email,setEmail] = useState()
    const [loading,setLoading] = useState()

    async function handlePasswordReset(e) {
        e.preventDefault();
        try {
            setLoading(true)
            await resetPassword(email)
           alert("Check your inbox for further instructions")
        } catch {
            alert("Failed to Set Password")
        }
        setLoading(false)
    }
    return ( 
        <div className="forgottenPassword">
            <div className="forgottenPasswordCard">
                <div className="forgottenPasswordTitle">Welcome to Eazy Options</div>
                <div className="forgottenPasswordText mt-4">Password Reset</div>
                <form onSubmit={(e)=>{handlePasswordReset(e)}}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        className="forgottenPasswordInput"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="forgottenPasswordButton"
                        value="Login"
                    >
                        Set Password
                    </button>
                </form>
                <div className="referalLink"><Link to="/login" className="text-decoration-none" >Login</Link></div>
                <div className="referalLink"><Link to="/signup" className="text-decoration-none" >Sign Up</Link></div>
            </div>
        </div>
    );
}
 
export default ForgottenPassword;