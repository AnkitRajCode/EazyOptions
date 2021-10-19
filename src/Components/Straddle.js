import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import Sidebar from "./Sidebar";
import '../Css/Straddle.css';
import Header from "./Header";

export default function Straddle() {
  const [shouldDisplay, setShouldDisplay] = useState("none")
  const [instrument, setInstrument] = useState("BANKNIFTY")
  const [strike1, setStrike1] = useState('33000');
  const [strike2, setStrike2] = useState('33000');
  const [callPrice, setCallPrice] = useState(false);
  const [putPrice, setPutPrice] = useState(false);
  const [callVWAP, setCallVWAP] = useState(false);
  const [putVWAP, setPutVWAP] = useState(false);
  const [combinedVWAP, setCombinedVWAP] = useState(false);
  const [callIV, setCallIV] = useState(false);
  const [putIV, setPutIV] = useState(false);
  const [combinedIV, setCombinedIV] = useState(false);
  const [extrinsic, setExtrinsic] = useState(false);
  const [date, setDate] = useState("2021-04-01");
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  function fetchResults(e) {
    e.preventDefault();
    let X = [];
    let combined_Y = [],
      callPrice_Y = [],
      putPrice_Y = [],
      call_VWAP = [],
      put_VWAP = [],
      combined_VWAP = []
    const data = {
      'name': instrument,
      'strike_ce': strike1,
      'strike_pe': strike2,
      'date': date
    }
    // "ce" : {
    //   "date":"",
    //   "time":"",
    //   "open":[],
    //   "high":[],

    // }
    const Data = JSON.stringify(data);
    // const url = 'https://api.eazyoptions.com:8080/charts';
    const url = 'https://kpiro.com/charts'
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
            if (data['status'] == 'error') return;
            data = data['data']
            let ce_data = data['CE'], pe_data = data['PE'];
            for (let i in ce_data) {
              X.push(i)
              callPrice_Y.push(ce_data[i]['Close'])
            }

            for (let i in pe_data) {
              putPrice_Y.push(pe_data[i]['Close'])
            }

            for (let i = 0; i < callPrice_Y.length; i++) {
              combined_Y.push(Math.round(callPrice_Y[i] + putPrice_Y[i]))
            }

            var vp = 0, vol = 0;
            for (let i = 0; i < X.length; i++) {
              let avg = (ce_data[X[i]]['High'] + ce_data[X[i]]['Low'] + ce_data[X[i]]['Close']) / 3, volume = ce_data[X[i]]['Volume'];
              console.log(avg, volume)
              vp += (avg * volume)
              vol += volume
              call_VWAP.push(Math.round(vp / vol))

            }
            vp = 0
            vol = 0;
            for (let i = 0; i < X.length; i++) {
              let avg = (pe_data[X[i]]['High'] + pe_data[X[i]]['Low'] + pe_data[X[i]]['Close']) / 3, volume = pe_data[X[i]]['Volume'];
              vp += (avg * volume)
              vol += volume
              put_VWAP.push(Math.round(vp / vol))

            }
            vp = 0
            vol = 0;
            for (let i = 0; i < X.length; i++) {
              let avg = ((pe_data[X[i]]['High'] + pe_data[X[i]]['Low'] + pe_data[X[i]]['Close'] + ce_data[X[i]]['High'] + ce_data[X[i]]['Low'] + ce_data[X[i]]['Close']) / 3), volume = ce_data[X[i]]['Volume'] + pe_data[X[i]]['Volume'];
              vp += (avg * volume)
              vol += volume
              combined_VWAP.push(Math.round(vp / vol))

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
                width: 1.5,
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
                  text: (strike1 == strike2 ? "Straddle" : "Strangle"),
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
                tickAmount: 10
              }
            }
            var series = [{
              name: "Combined Premium",
              data: combined_Y,
            }];

            if (callPrice) {
              series.push({
                name: "Call Price",
                data: callPrice_Y,
              })
            }
            if (putPrice) {
              series.push({
                name: "Put Price",
                data: putPrice_Y,
              })
            }
            if (callVWAP) {
              series.push({
                name: "Call VWAP",
                data: call_VWAP,
              })
            }
            if (putVWAP) {
              series.push({
                name: "Put VWAP",
                data: put_VWAP,
              })
            }
            if (combinedVWAP) {
              series.push({
                name: "Combined VWAP",
                data: combined_VWAP,
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
        <Header/>
        <div className="straddleCard">
          <form action="" className="form-group form-inline" onSubmit={(e) => { handleSubmit(e); }} >

            <div className=" text-center mb-4 col-md-12 h5">
              Straddle / Strangle
            </div>
            <select
              value={instrument}
              onChange={(e) => { setInstrument(e.target.value) }}
              className="straddleSelect"
            >
              <option value="NIFTY">NIFTY</option>
              <option value="NIFTY BANK">NIFTY BANK</option>
            </select>

            <label>CE:&nbsp;&nbsp;</label>
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
              <option value={"39000"}>39,000</option>
              <option value={"39100"}>39,100</option>
              <option value={"39200"}>39,200</option>
              <option value={"39700"}>39,700</option>
            </select>

            <label>PE:&nbsp;&nbsp;</label>
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
              <option value={"39000"}>39,000</option>
              <option value={"39100"}>39,100</option>
              <option value={"39200"}>39,200</option>
              <option value={"39700"}>39,700</option>
            </select>

            <label>Date:&nbsp;&nbsp;</label>
            <input
              value={date}
              type="date"
              name="date"
              id="date"
              onChange={(e) => { setDate(e.target.value) }}
              className="straddleSelect"
            />
            <input type="submit" value="Check" className="btn btn-sm btn-info ml-5" />


            <div className="col-md-12 form-inline mt-3">
              <label><input type="checkbox" checked={callPrice} onChange={(e) => { setCallPrice(e.target.checked) }} />Call Prices</label>
              <label><input type="checkbox" checked={putPrice} onChange={(e) => { setPutPrice(e.target.checked) }} />Put Prices</label>
              <label><input type="checkbox" checked={extrinsic} onChange={(e) => { setExtrinsic(e.target.checked) }} />Extrinsic</label>
              <label><input type="checkbox" checked={callVWAP} onChange={(e) => { setCallVWAP(e.target.checked) }} />Call Vwap</label>
              <label><input type="checkbox" checked={putVWAP} onChange={(e) => { setPutVWAP(e.target.checked) }} />Put Vwap</label>
              <label><input type="checkbox" checked={combinedVWAP} onChange={(e) => { setCombinedVWAP(e.target.checked) }} />Combined Vwap</label>
              <label><input type="checkbox" checked={callIV} onChange={(e) => { setCallIV(e.target.checked) }} />Call IV</label>
              <label><input type="checkbox" checked={putIV} onChange={(e) => { setPutIV(e.target.checked) }} />Put IV</label>
              <label><input type="checkbox" checked={combinedIV} onChange={(e) => { setCombinedIV(e.target.checked) }} />Combined IV</label>
            </div>

          </form>
        </div>
        <div className="col-md-12">
          <Chart
            style={{ "display": shouldDisplay }}
            options={chartOptions}
            series={chartSeries}
            type="line"
            width="95%"
            height="600px"
          />
        </div>
      </section>
    </div>
  )
}