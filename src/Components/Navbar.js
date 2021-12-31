import '../Css/Navbar.css'
import avatar from '../Images/avatar.png';
import { Link } from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext';
import { useHistory } from 'react-router';

const Navbar = () => {
    const { currentUser } = useAuth();
    const { logout } = useAuth();
    const history = useHistory();

    function handleLogout(e) {

        e.preventDefault();
        try {
            logout();
            history.push('/');
        } catch {
            alert("Couldn't logout");
        }
    }

    function checkUserSession() {
        if (currentUser && currentUser.email) {
            return (
                <>
                    <li className="nav-item ml-md-3">
                        <Link className="nav-link" onClick={(e)=>{handleLogout(e)}}>Log out</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item ml-md-3">
                        <Link className="nav-link" to="/login">Log in</Link>
                    </li>
                    <li className="nav-item ml-md-3">
                        <Link className="nav-link" to="/signup">Sign up</Link>
                    </li>
                </>
            )
        }
    }
    function userDashboard() {
        if (currentUser && currentUser.email) {
            return (
                <>
                    <div className="ml-auto">
                        <Link to="/dashboard">
                            <img src={avatar} alt="avatar" style={{width:"40px",height:"40px"}} />
                        </Link>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    
                </>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-3">
            <Link className="navbar-brand" to="/">
                <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Brand" className="ml-md-4" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-md-4">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {checkUserSession()}
                </ul>
            </div>
            {userDashboard()}
        </nav>
    );
}

export default Navbar;