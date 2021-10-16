import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
// Css
import '../Css/Auth.css'

const Signup = () => {
    const { signup, createUserDocument } = useAuth()
    const history = useHistory()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [loading, setLoading] = useState()
    

    async function handlesigin(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Confirm Password is not same as Password")
            return
        }
        try {
            setLoading(true)
            await signup(email, password);
            history.push('/dashboard')
        } catch (error){
            alert("Failed to create an account"+error)
        }
        setLoading(false)
        await createUserDocument(username);
    }
    return (
        <div className="signup">
            <div className="signupCard">
                <div className="signupTitle">Welcome to Eazy Options</div>
                <div className="signupText mt-4">Sign Up</div>
                <form onSubmit={(e) => { handlesigin(e) }}>
                    <input
                        name="username"
                        type="username"
                        placeholder="Enter your username"
                        className="signupInput"
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        className="signupInput"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="signupInput"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                    />
                    <input
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        className="signupInput"
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                        required
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
                <div className="referalLink"><Link to="/login" className="text-decoration-none" >Already have an account? Login</Link></div>
                <div className="referalLink"><Link to="/" className="text-decoration-none" >Back to Home</Link></div>
            </div>
        </div>
    );
}

export default Signup;