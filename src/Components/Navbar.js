import '../Css/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
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
                        <Link  className="nav-link active" to="/">Education</Link>
                    </li>
                    <li className="nav-item ml-md-3">
                        <Link className="nav-link" to="/login">Log in</Link>
                    </li>
                    <li className="nav-item ml-md-3">
                        <Link className="nav-link" to="/signup">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;