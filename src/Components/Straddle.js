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
              X.push(x[e][0])
              Y.push(x[e][1])
            }
            var line = {
              chart: {
                id: "basic-bar",
                height: '100%'
              },
              xaxis: {
                categories: X,
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
        <div className="card w-75 datataker row">
          <h4>Straddle</h4>
          <form action="" className="form-group p-3 col-md-12" onSubmit={(e) => { handleSubmit(e); }} >

            <select onChange={(e) => { setInstrument(e.target.value) }}>
              <option value="NIFTY">NIFTY</option>
              <option value="BANKNIFTY">BANK NIFTY</option>
            </select>
            <br />
            <br />
            <lable>CE</lable>
            <select onChange={(e) => { setStrike(e.target.value) }}>
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
            <br />
            <br />
            <lable>PE</lable>
            <select onChange={(e) => { setStrike(e.target.value) }}>
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
            <br />
            <br />
            <label>Date</label>
            <input type="date" name="date" id="date" onChange={(e) => { setDate(e.target.value) }} />
            <br />
            <br />
            <input type="submit" className="btn btn-sm btn-info" />
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="col-md-12">
          <Chart
            style={{ "display": shouldDisplay }}
            options={chartOptions}
            series={chartSeries}
            type="line"
            width="95%"
            height="100%"
            height="350px"
          />
        </div>
      </section>
    </div>
  )

}