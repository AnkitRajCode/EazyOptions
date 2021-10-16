import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import Sidebar from "./Sidebar";
import '../Css/Straddle.css';

export default function Straddle() {
  const [shouldDisplay, setShouldDisplay] = useState("none")
  const [instrument, setInstrument] = useState("")
  const [strike, setStrike] = useState();
  const [date, setDate] = useState();
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  function fetchResults(e) {
    e.preventDefault();
    let X = [];
    let Y = [];
    const data = {
      'name': instrument,
      'strike': strike,
      'date': date
    }
    const Data = JSON.stringify(data);
    const url = 'https://kpiro.com/charts';
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: Data
    };
    fetch(url, requestOptions).then(
      (response) => {
        response.json().then(
          (data) => {
            let x = data["data"]
            for (var e in x) {
              X.push(x[e][0].substring(0, x[e][0].length - 3))
              Y.push(x[e][1])
            }
            var line = {
              chart: {
                id: "straddle-strangle",
                height: '100%'
              },
              stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: undefined,
                width: 1,
                dashArray: 0,
              },
              xaxis: {
                categories: X,
                title: {
                  text: "Time",
                  style: {
                    color: undefined,
                    fontSize: '20px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-title',
                  },
                },
                tickPlacement: 'between',
                tickAmount: 10,
                labels: {
                  show: true,
                  rotate: -45,
                  rotateAlways: false,
                  hideOverlappingLabels: true,
                  showDuplicates: false,
                  trim: true,
                  minHeight: undefined,
                  maxHeight: 400,
                  style: {
                    colors: [],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                  },
                  offsetX: 0,
                  offsetY: 0,
                  format: undefined,
                  formatter: undefined,
                  datetimeUTC: true,
                  datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yy",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                  },
                }
              },
              yaxis: {
                title: {
                  text: "Straddle/Strangle",
                  rotate: -90,
                  offsetX: 0,
                  offsetY: 0,
                  style: {
                    color: undefined,
                    fontSize: '20px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                  },
                },
              }
            }
            var series = [
              {
                name: "Combined Premium",
                data: Y
              }
            ]
            setChartSeries(series);
            setChartOptions(line);
            setShouldDisplay("");
          }
        )
      }
    )
  }
  function handleSubmit(e) {
    fetchResults(e);
  }

  return (
    <div className="straddle">
      <Sidebar />
      <section className="home-section">
        <div className="straddleCard">
          <div className="row">
            <div className="col-md-4">
              <div className="text-center hide-sm">STRADDLE</div>
            </div>
            <div className="col-md-2">
              <div className="text-center hide-sm">CE</div>
            </div>
            <div className="col-md-2">
              <div className="text-center hide-sm">PE</div>
            </div>
            <div className="col-md-4">
              <div className="text-center hide-sm">DATE</div>
            </div>
          </div>

          <form action="" className="form-group p-3 col-md-12" onSubmit={(e) => { handleSubmit(e); }} >
            <div className="row">
              <div className="col-md-4">
                <div className="text-center mb-3 hide-lg">STRADDLE</div>
                <select
                onChange={(e) => { setInstrument(e.target.value) }}
                className="form-control straddleSelect"
                >
                  <option value="NIFTY">NIFTY</option>
                  <option value="BANKNIFTY">BANK NIFTY</option>
                </select>
              </div>

              <div className="col-md-2">
                <div className="hide-lg mt-2 mb-1">CE</div>
                <select
                onChange={(e) => { setStrike(e.target.value) }}
                className="form-control straddleSelect"
                >
                  <option value={37500}>37,500</option>
                  <option value={37600}>37,600</option>
                  <option value={37800}>37,800</option>
                  <option value={38000}>38,000</option>
                  <option value={38100}>38,100</option>
                  <option value={38200}>38,200</option>
                  <option value={38300}>38,300</option>
                  <option value={38400}>38,400</option>
                  <option value={38500}>38,500</option>
                </select>
              </div>

              <div className="col-md-2">
                <div className="hide-lg  mt-2 mb-1">SE</div>
                <select
                onChange={(e) => { setStrike(e.target.value) }}
                className="form-control straddleSelect"
                >
                  <option value={37500}>37,500</option>
                  <option value={37600}>37,600</option>
                  <option value={37800}>37,800</option>
                  <option value={38000}>38,000</option>
                  <option value={38100}>38,100</option>
                  <option value={38200}>38,200</option>
                  <option value={38300}>38,300</option>
                  <option value={38400}>38,400</option>
                  <option value={38500}>38,500</option>
                </select>
              </div>

              <div className="col-md-4">
                <div className="hide-lg  mt-2 mb-1">Date</div>
                <input
                type="date"
                name="date"
                id="date"
                onChange={(e) => { setDate(e.target.value) }} 
                className="form-control straddleSelect"
                />
              </div>
            </div>

            <div className="row">
              <input type="submit" className="btn btn-sm btn-info mx-auto mt-5 straddleButton" />
            </div>
          </form>
          
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="col-md-12">
          <Chart
            style={{ "display": shouldDisplay }}
            options={chartOptions}
            series={chartSeries}
            type="line"
            width="98%"
            height="350px"
          />
        </div>
      </section>
    </div>
  )

}