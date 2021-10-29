import { Link } from "react-router-dom";
//Components
import Navbar from '../Components/Navbar';
// Css
import '../Css/Welcome.css'

const Welcome = () => {
    return ( 
        <div className="welcome">
            <Navbar/>
            <div className="welcomeHeader">
                <Link to="/dashboard" className="">Get Started</Link>
            </div>
            <div className="welcomeSection">
                <div className="sectionOne">
                    <div className="partOne">
                        <div className="partOneHeading">Options</div>
                        <div className="partOneCard">Futures</div>
                        <div className="partOneCard">Straddle</div>
                        <div className="partOneCard">Strategy</div>
                    </div>
                    <div className="partOne">
                        <div className="partOneHeading">Options</div>
                        <div className="partCombine">Futures</div>
                    </div>
                    <div className="partOne">
                        <div className="partOneHeading">Options</div>
                        <div className="partOneCard">Futures</div>
                        <div className="partOneCard">Straddle</div>
                        <div className="partOneCard">Strategy</div>
                    </div>
                </div>
                <div className="sectionTwo">
                    <div className="sidepartone"></div>
                    <div className="sideparttwo"></div>
                    <div className="sideparttwo"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Welcome;