import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import Sidebar from "./Sidebar";
import '../Css/Straddle.css';

export default function Straddle() {
  const [shouldDisplay, setShouldDisplay] = useState("none")
  const [instrument, setInstrument] = useState("BANKNIFTY")
  const [strike1, setStrike1] = useState('33000');
  const [strike2, setStrike2] = useState('33000');
  const [callPrice, setCallPrice] = useState(false);
  const [putPrice, setPutPrice] = useState(false);
  const [date, setDate] = useState("2021-04-01");
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  function fetchResults(e) {
    e.preventDefault();
    let X = [];
    let combined_Y = [],
    callPrice_Y = [],
    putPrice_Y = []
    const data = {
      'name': instrument,
      'strike1': strike1,
      'strike2': strike2,
      'date': date
    }
    const Data = JSON.stringify(data);
    const url = 'https://api.eazyoptions.com:8080/charts';
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: Data
    };
    fetch(url, requestOptions).then(
      (response) => {
        response.json().then(
          (data) => {
            console.log(data)
            let combined_premium = data["data"]["combined_premium"], call_prices = data["data"]["call_prices"], put_prices = data["data"]["put_prices"]
            for (let e in combined_premium) {
              X.push(combined_premium[e][0].substring(0, combined_premium[e][0].length - 3))
              combined_Y.push(combined_premium[e][1])
            }
            for (let e in call_prices) {
              callPrice_Y.push(call_prices[e][1])
            }
            for (let e in put_prices) {
              putPrice_Y.push(put_prices[e][1])
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
                  text: (strike1==strike2?"Straddle": "Strangle"),
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
            var series = [{
              name: "Combined Premium",
              data: combined_Y
            }];

            if (callPrice) {
              series.push({
                name: "Call Price",
                data: callPrice_Y,
                color: "#8B0000"
              })
            }
            if (putPrice) {
              series.push({
                name: "Put Price",
                data: putPrice_Y
              })
            }
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
          <form action="" className="form-group form-inline" onSubmit={(e) => { handleSubmit(e); }} >

              <div className=" text-center mb-4 col-md-12">
                Straddle / Strangle
              </div>
              <select
                value={instrument}
                onChange={(e) => { setInstrument(e.target.value) }}
                className="straddleSelect"
              >
                <option value="NIFTY">NIFTY</option>
                <option value="BANKNIFTY">BANK NIFTY</option>
              </select>

              <label for="">CE</label>
              <select
                value={strike1}
                onChange={(e) => { setStrike1(e.target.value) }}
                className="straddleSelect"
              >
                <option value={"33000"}>33,000</option>
                <option value={"37000"}>37,000</option>
                <option value={"37300"}>37,300</option>
                <option value={"37500"}>37,500</option>
                <option value={"37600"}>37,600</option>
                <option value={"37800"}>37,800</option>
                <option value={"38000"}>38,000</option>
                <option value={"38100"}>38,100</option>
                <option value={"38200"}>38,200</option>
                <option value={"38300"}>38,300</option>
                <option value={"38400"}>38,400</option>
                <option value={"38500"}>38,500</option>
              </select>

              <label for="">PE</label>
              <select
                value={strike2}
                onChange={(e) => { setStrike2(e.target.value) }}
                className="straddleSelect"
              >
                <option value={"33000"}>33,000</option>
                <option value={"37000"}>37,000</option>
                <option value={"37300"}>37,300</option>
                <option value={"37500"}>37,500</option>
                <option value={"37600"}>37,600</option>
                <option value={"37800"}>37,800</option>
                <option value={"38000"}>38,000</option>
                <option value={"38100"}>38,100</option>
                <option value={"38200"}>38,200</option>
                <option value={"38300"}>38,300</option>
                <option value={"38400"}>38,400</option>
                <option value={"38500"}>38,500</option>
              </select>
              
              <label>Date</label>
              <input
                value={date}
                type="date"
                name="date"
                id="date"
                onChange={(e) => { setDate(e.target.value) }}
                className="straddleSelect"
              />
              
              <label>Call Prices
              <input type="checkbox" checked={callPrice} onChange={(e) => { setCallPrice(e.target.checked) }} />
              </label>

              <label>Put Prices
              <input type="checkbox" checked={putPrice} onChange={(e) => { setPutPrice(e.target.checked) }}/>
              </label>

              <input type="submit" value="Check" className="btn btn-sm btn-info ml-5" />
          </form>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="col-md-12">
          <Chart
            style={{ "display": shouldDisplay }}
            options={chartOptions}
            series={chartSeries}
            type="line"
            width="95%"
            height="350px"
          />
        </div>
      </section>
    </div>
  )

}