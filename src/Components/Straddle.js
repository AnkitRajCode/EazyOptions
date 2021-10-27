import React, { useEffect } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import Sidebar from "../Components/Sidebar";
import '../Css/Straddle.css';
import moment from "moment";
import Header from "./Header";

export default function Straddle() {
    const [instrument, setInstrument] = useState("NIFTY BANK")
    const [strike1, setStrike1] = useState('');
    const [strike2, setStrike2] = useState('');
    const [callPrice, setCallPrice] = useState(false);
    const [putPrice, setPutPrice] = useState(false);
    const [callVWAP, setCallVWAP] = useState(false);
    const [putVWAP, setPutVWAP] = useState(false);
    const [combinedVWAP, setCombinedVWAP] = useState(false);
    const [callIV, setCallIV] = useState(false);
    const [putIV, setPutIV] = useState(false);
    const [combinedIV, setCombinedIV] = useState(false);
    const [extrinsic, setExtrinsic] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);
    const [expiry, setExpiry] = useState([]);
    const [callStrikes, setCallStrikes] = useState([]);
    const [putStrikes, setPutStrikes] = useState([]);
    const [currentExpiry, setCurrentExpiry] = useState("");
    const [currentData,setCurrentData] = useState({})

    function updateParameters(ce_data,pe_data) {
        let X = [];
        let combined_Y = [],
            callPrice_Y = [],
            putPrice_Y = [],
            call_VWAP = [],
            put_VWAP = [],
            combined_VWAP = []
        for (let i in ce_data) {
            X.push(i)
            callPrice_Y.push(parseFloat(ce_data[i]['Close']))
        }
        for (let i in pe_data) {
            putPrice_Y.push(parseFloat(pe_data[i]['Close']))
        }
        for (let i = 0; i < callPrice_Y.length; i++) {
            combined_Y.push(Math.round(callPrice_Y[i] + putPrice_Y[i]))
        }
        var vp = 0, vol = 0;
        for (let i = 0; i < X.length; i++) {
            let avg = (parseFloat(ce_data[X[i]]['High']) + parseFloat(ce_data[X[i]]['Low']) + parseFloat(ce_data[X[i]]['Close'])) / 3, volume = parseFloat(ce_data[X[i]]['Volume']);
            vp += (avg * volume)
            vol += volume
            call_VWAP.push(Math.round(vp / vol))
        }
        vp = 0
        vol = 0;
        for (let i = 0; i < X.length; i++) {
            let avg = (parseFloat(pe_data[X[i]]['High']) + parseFloat(pe_data[X[i]]['Low']) + parseFloat(pe_data[X[i]]['Close'])) / 3, volume = parseFloat(pe_data[X[i]]['Volume']);
            vp += (avg * volume)
            vol += volume
            put_VWAP.push(Math.round(vp / vol))
        }
        vp = 0
        vol = 0;
        for (let i = 0; i < X.length; i++) {
            let avg = ((parseFloat(pe_data[X[i]]['High']) + parseFloat(pe_data[X[i]]['Low']) + parseFloat(pe_data[X[i]]['Close']) + parseFloat(ce_data[X[i]]['High']) + parseFloat(ce_data[X[i]]['Low']) + parseFloat(ce_data[X[i]]['Close'])) / 3), volume = ce_data[X[i]]['Volume'] + pe_data[X[i]]['Volume'];
            vp += (avg * volume)
            vol += volume
            combined_VWAP.push(Math.round(vp / vol))
        }

        for (let i in X) {
            X[i] = X[i].substring(11,16)
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
    }

    function updateStateAfterFetching(data,temp_expiry,call_strike,put_strike) {
        setCurrentData(data);
        setCurrentExpiry(temp_expiry);
        setStrike1(call_strike)
        setStrike2(put_strike)
        let ce_data = data[temp_expiry][call_strike]['CE'], pe_data = data[temp_expiry][put_strike]['PE'];
        updateParameters(ce_data,pe_data)
    }

    function updateState(e) {
        e.preventDefault();
        let ce_data = currentData[currentExpiry][strike1]['CE'], pe_data = currentData[currentExpiry][strike2]['PE'];
        updateParameters(ce_data,pe_data)
    }

    function fetchAllDataFromServerForCurrentInstrument() {
        let Data = {
            'name': instrument,
            'date': moment().format("YYYY-MM-DD")
        }

        Data = JSON.stringify(Data);
        // const url = 'https://api.eazyoptions.com:8080/charts';
        // const url = 'http://127.0.0.1:8080/charts'
        const url = 'https://kpiro.com/charts'
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: Data
        };

        fetch(url,requestOptions).then(
            (response) => {
                response.json().then(
                    (data) =>  {
                        data = data['data']
                        let lst = [];
                        for (let exp in data) {
                            lst.push(exp)
                        }
                        let temp_expiry = lst[0]
                        setExpiry(lst)
                        setCurrentExpiry(lst[0]);
                        let xx = lst[0]
                        lst = [];
                        for (let stk in data[xx]) {
                            lst.push(stk)
                        }
                        let call_strike = lst[0], put_strike = lst[0];
                        setCallStrikes(lst);
                        setPutStrikes(lst);  
                        setStrike1(lst[0]);
                        setStrike2(lst[0]);
                        setCurrentData(data);
                        updateStateAfterFetching(data,temp_expiry,call_strike,put_strike)
                    }
                )
            }

        )
        
    }

    

    useEffect(()=> {
        fetchAllDataFromServerForCurrentInstrument();
    }, [instrument])

    // useEffect(()=> {
    //     updateState();
    // }, [currentExpiry,strike1,strike2,callPrice,putPrice,callVWAP,putVWAP,combinedVWAP])

    return (
        <div className="straddle">
            <Sidebar />
            <section className="home-section">
              <Header/>
                <div className="straddleCard">
                    <form action="" className="form-group form-inline" onSubmit={(e)=>{updateState(e)}}>
                        <div className=" text-center mb-4 col-md-12 h5">
                            Straddle / Strangle
                        </div>
                        <select
                            value={instrument}
                            onChange={(e) => {
                                setInstrument(e.target.value);
                            }}
                            className="straddleSelect"
                        >
                            <option value="NIFTY">NIFTY</option>
                            <option value="NIFTY BANK">NIFTY BANK</option>
                        </select>
                        <select
                            value={currentExpiry}
                            onChange={(e)=>{
                                setCurrentExpiry(e.target.value);
                            }}
                            className="straddleSelect"
                        >
                            {
                                expiry.map((x, idx) => {
                                    return (
                                        <option value={x} key={idx}>
                                            {x}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <label>CE:&nbsp;&nbsp;</label>
                        <select
                            value={strike1}
                            onChange={(e) => {
                                setStrike1(e.target.value);
                            }}
                            className="straddleSelect"
                        >
                            {
                                callStrikes.map((x, idx) => {
                                    return (
                                        <option value={x} key={idx}>
                                            {x}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <label>PE:&nbsp;&nbsp;</label>
                        <select
                            value={strike2}
                            onChange={(e) => {
                                setStrike2(e.target.value);
                            }}
                            className="straddleSelect"
                        >
                            {
                                putStrikes.map((x, idx) => {
                                    return (
                                        <option value={x} key={idx}>
                                            {x}
                                        </option>
                                    )
                                })
                            }
                        </select>

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