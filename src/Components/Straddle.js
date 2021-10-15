import React, { Component } from "react";
import Chart from "react-apexcharts";
import Sidebar from "./Sidebar";
import '../Css/Straddle.css';

class Straddle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,1999,2000,2001,2002,2003,2004]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,92,95,89,99,106]
        }
      ]
    };
}

render() {
    return (
        <div className="straddle">
            <Sidebar/>
            <section className="home-section">
                <div className="card w-75 datataker row">
                    <h4>Straddle</h4>
                    <form action="" className="form-group p-3 col-md-12" >
                        
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
                <div className="col-md-12">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        width="95%"
                        height="350px"
                    />
                </div>
            </section>
        </div>
        )
    }
}
 
export default Straddle;