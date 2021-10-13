import Sidebar from "./Sidebar";

import '../Css/Straddle.css';
const Straddle = () => {
    return ( 
        <div className="straddle">
            <Sidebar/>
            <section className="home-section">
                <div className="card w-50">
                    <h4>Straddle</h4>
                    <form action="" className="form-group" pl-5>
                        
                        <select>
                            <option value="nifty">Nifty</option>
                            <option value="bankNifty">Bank Nifty</option>
                        </select>
                        <br/>
                        <br/>
                        <lable>CE</lable>
                        <select>
                            <option value="37500">37,500</option>
                            <option value="37600">37,600</option>
                            <option value="37800">37,800</option>
                            <option value="38000">38,000</option>
                            <option value="38100">38,100</option>
                            <option value="38200">38,200</option>
                            <option value="38300">38,300</option>
                            <option value="38400">38,400</option>
                            <option value="38500">38,500</option>
                        </select>
                        <br/>
                        <br/>
                        <lable>PE</lable>
                        <select>
                            <option value="37500">37,500</option>
                            <option value="37600">37,600</option>
                            <option value="37800">37,800</option>
                            <option value="38000">38,000</option>
                            <option value="38100">38,100</option>
                            <option value="38200">38,200</option>
                            <option value="38300">38,300</option>
                            <option value="38400">38,400</option>
                            <option value="38500">38,500</option>
                        </select>
                        <br/>
                        <br/>
                        <lable>Date</lable>
                        <input type="date" name="date" id="date" />
                        <br/>
                        <br/>
                        <input type="submit" className="btn btn-sm btn-info" />
                    </form>
                </div>
            </section>
        </div>
     );
}
 
export default Straddle;