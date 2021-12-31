import React, { Component } from 'react'
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
// import '../Css/StrategyAnalyzer.css';

export class StrategyAnalyzer extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <section className="home-section pb-3">
                    <Header/>

                    <form className="d-flex flex-row justify-content-between align-items-center px-5">
                        <div className="">
                            <div className="">
                                <select className="straddleSelect">
                                    <option>Bank Nifty</option>
                                    <option>Nifty</option>
                                </select>
                                <select className="straddleSelect">
                                    <option>Oct 28</option>
                                    <option>Oct 31</option>
                                </select>
                            </div>
                            <select  className="straddleSelect">
                                <option>All</option>
                                <option>All</option>
                            </select>
                        </div>
                        <div className="">
                            <label>Lower Limit</label>
                            <select className="straddleSelect">
                                <option value="">39500</option>
                                <option value="">398500</option>
                            </select>
                        </div>
                        <div className="">
                            <label>Upper Limit</label>
                            <select className="straddleSelect">
                                <option value="">39500</option>
                                <option value="">398500</option>
                            </select>
                        </div>
                        <button className="btn btn-primary btn-sm">Analyze</button>
                        <button className="btn btn-secondary btn-sm">Playoff Diagram (0)</button>
                    </form>
                    <table className="table table-striped">
                        <tr>
                            <th>Strategy</th>
                            <th>Strikes</th>
                            <th>max Profit</th>
                            <th>max Loss</th>
                            <th>RR</th>
                            <th>PoP</th>
                            <th>BreakEven</th>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="long" /> Long Strategy</td>
                            <td>39200CE-39200PE</td>
                            <td>Unlimited</td>
                            <td>-7683.75</td>
                            <td >-</td>
                            <td >-</td>
                            <td>38892.65-39507.35</td>
                        </tr>
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                    </table>
                </section>
            </div>
        )
    }
}

export default StrategyAnalyzer
