import { Link } from "react-router-dom";
//Components
import Navbar from '../Components/Navbar';
// Css
import '../Css/Welcome.css'

const Welcome = () => {
    return ( 
        <div className="welcome">
            <Navbar/>
            <div className="brandImg ml-md-5"></div>
            <div className="companyName ml-md-5">Eazy Options</div>
            <div className="companySlogan ml-md-5">Trading Made<br/> Easy</div>
            <Link to="/dashboard" className="btn btn-lg landingButton ml-md-5 mt-4">Get Started</Link>
        </div>
    );
}
 
export default Welcome;