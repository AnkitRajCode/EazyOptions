import { Link } from "react-router-dom";
//Components
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// Css
import '../Css/Welcome.css'
// Image
import category from '../Images/category.png'

const Welcome = () => {
    return ( 
        <>
            <Navbar />
            <div className="welcomeHeader">
                <span>Easy Options</span>
                <br/>
                <h2>Trading made Easy</h2>
                <div className="pill-container">
                    <div className="pill mx-3">IRCTC</div>
                    <div className="pill mx-3">ADANI</div>
                    <div className="pill mx-3">HDFC</div>
                    <div className="pill mx-3">NESTLE</div>
                    <div className="pill mx-3">ITC</div>
                </div>
                <div className="welcomeHeaderStyle"></div>
            </div>
            <div className="container-fluid px-5">
                <div className="h2 text-center mt-4 ">What You want</div>
                <div className="h4 text-center text-dark">We have it all</div>
                <div className="welcomeCategory">
                    <div className="categorySection">
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryText text-md-right">
                                <h4 className="categoryTitle">Stocks</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse.</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                            <div className="categoryImg">
                                <img src={category} alt="category" />
                            </div>
                        </Link>
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryText text-md-right">
                                <h4 className="categoryTitle">Options</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico-home-03.png" alt="category" />
                            </div>
                        </Link>
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryText text-md-right">
                                <h4 className="categoryTitle">Futures Options</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico-home-05.png" alt="category" />
                            </div>
                        </Link>
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryText text-md-right">
                                <h4 className="categoryTitle">IPOs</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico-home-02.png" alt="category" />
                            </div>
                        </Link>
                    </div>
                    <div className="categorySection">
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico_38.png" alt="category" />
                            </div>
                            <div className="categoryText">
                                <h4 className="categoryTitle">ETFs</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                        </Link>
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico-home-04.png" alt="category" />
                            </div>
                            <div className="categoryText">
                                <h4 className="categoryTitle">Futures</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                        </Link>
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico-home-06-1.png" alt="category" />
                            </div>
                            <div className="categoryText">
                                <h4 className="categoryTitle">Crypto</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                        </Link>
                        <Link className="categoryCard text-decoration-none" to="/">
                            <div className="categoryImg">
                                <img src="https://www.tradestation.com/wp-content/uploads/2019/11/ico-home-07.png" alt="category" />
                            </div>
                            <div className="categoryText">
                                <h4 className="categoryTitle">Mutual Funds</h4>
                                <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum explicabo esse, explicabo esse..</div>
                                <Link className="text-decoration-none text-primary mt-3">Learn more &#x27A4;</Link>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="priceSection mt-5">
                    <h3>Pricing :</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-body text-center">
                                <h1>5$</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-body text-center">
                                <h1>15$</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-body text-center">
                                <h1>20$</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-body text-center">
                                <h1>25$</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews">
                    <div className="viedoReviews">
                        <h2>Viedo Review's :</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <iframe width="100%" height="250" style={{border:"none", borderRadius:"15px"}}
                                    src="https://www.youtube.com/embed/RWWQVYVNCtY"
                                    title="reviews"
                                    >
                                </iframe>
                            </div>
                            <div className="col-md-4">
                                <iframe width="100%" height="250" style={{border:"none", borderRadius:"15px"}}
                                    src="https://www.youtube.com/embed/gydza7HYKik"
                                    title="reviews"
                                    >
                                </iframe>
                            </div>
                            <div className="col-md-4">
                                <iframe width="100%" height="250" style={{border:"none", borderRadius:"15px"}}
                                    src="https://www.youtube.com/embed/JgToilQHk2g"
                                    title="reviews"
                                    >
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="twitterReviews my-5">
                        <h2>Social media Review's :</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mt-2">
                                    <div className="card-body border-0 outline-0">
                                        <h6>@ankitraj <i class="fab fa-twitter"></i></h6>
                                        <h6>Ankit Raj</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisicing elit. Earum totam ratione, quisquam saepe at non consectetur corporis quidem odio quod.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-2">
                                    <div className="card-body border-0 outline-0">
                                        <h6>@ankitraj <i class="fab fa-twitter"></i></h6>
                                        <h6>Ankit Raj</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisicing elit. Earum totam ratione, quisquam saepe at non consectetur corporis quidem odio quod.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-2">
                                    <div className="card-body border-0 outline-0">
                                        <h6>@ankitraj <i class="fab fa-twitter"></i></h6>
                                        <h6>Ankit Raj</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisicing elit. Earum totam ratione, quisquam saepe at non consectetur corporis quidem odio quod.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Welcome;