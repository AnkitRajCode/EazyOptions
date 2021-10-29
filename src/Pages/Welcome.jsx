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
                <Link to="/dashboard" className="btn btn-sm btn-warning">Dashboard</Link>
            </div>
            <div className="welcomeSection">
                <div className="sectionOne">
                    <div className="partOne">
                        <div className="partOneHeading text-dark">Options</div>
                        <div className="partOneCard">
                            <Link to="/straddle" className="text-decoration-none text-dark">
                                Straddle
                                <i class='bx bx-grid-alt'></i>
                            </Link>
                        </div>
                        <div className="partOneCard">
                            <Link to="/straddle" className="text-decoration-none text-dark">
                                Strategy
                                <i class='bx bx-line-chart' ></i>
                            </Link>
                        </div>
                        <div className="partOneCard">
                            <Link to="/futures" className="text-decoration-none text-dark">
                                Futures
                                <i class='bx bx-line-chart' ></i>
                            </Link>
                        </div>
                    </div>
                    <div className="partOne">
                        <div className="partOneHeading text-dark">Strategy Analyzer</div>
                        <div className="partCombine">Futures</div>
                    </div>
                    <div className="partOne">
                        <div className="partOneHeading">Options</div>
                        <div className="partOneCard">Futures</div>
                        <div className="parttwocard"></div>
                    </div>
                </div>
                <div className="sectionTwo">
                    <div className="sidepartone shadow"></div>
                    <div className="sideparttwo shadow"></div>
                    <div className="sideparttwo shadow"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Welcome;