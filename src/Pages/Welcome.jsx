import { Link } from "react-router-dom";
//Components
import Navbar from '../Components/Navbar';
// Css
import '../Css/Welcome.css'
// Image
import image from '../Images/avatar.png'

const Welcome = () => {
    return ( 
        <>
            <div className="welcome">
                <Navbar/>
                <div className="brandImg ml-md-5"></div>
                <div className="companyName ml-md-5">Eazy Options</div>
                <div className="companySlogan ml-md-5">Trading Made<br/> Easy</div>
                <Link to="/dashboard" className="btn btn-lg landingButton ml-md-5 mt-4">Get Started</Link>
            </div>

            <div className="container-fluid">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <img src={image} alt="feature" style={{width:"90%",marginLeft:"5%",marginTop:"10px" }} />
                                    <div className="text-center py-2">Nifty/Bank Nifty</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>Feature</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui officiis suscipit assumenda, corrupti earum nihil laborum tempora voluptas neque aut debitis ipsam culpa incidunt illo quaerat quae beatae? Nemo facilis repellat est non voluptatum eos, delectus, inventore quam dolorem tenetur sapiente praesentium nesciunt? Eum eius ducimus voluptatum et, fugit ut laboriosam vitae alias? Iure!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Welcome;