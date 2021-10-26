import React, { useEffect } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import Sidebar from "../Components/Sidebar";
import '../Css/OI-Charts.css';
import moment from "moment";
import Header from "../Components/Header";

export default function OICharts() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);
    const [currentExpiry, setCurrentExpiry] = useState();
    const [expiryList, setExpiryList] = useState([]);
    const [currentData, setCurrentData] = useState({});
    const spot = 41000;


    function updateParameters(X, series) {

        var line = {
            chart: {
                id: "oi-charts",
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
                    text: "OI-Chart",
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
                tickAmount: 0.1
            }
        }
        setChartSeries(series);
        setChartOptions(line);
    }


    function fetchAllDataFromServerForCurrentInstrument() {
        const url = 'https://kpiro.com/oi-charts'
        const requestOptions = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        };


        fetch(url, requestOptions).then(
            (response) => {
                response.json().then(
                    (data) => {
                        var X = [], ce_data = [], pe_data = [];
                        data = data['data']
                        setCurrentData(data);
                        var lst = [];
                        for (var e in data) {
                            lst.push(e);
                        }
                        setCurrentExpiry(lst[0])
                        for (var e in data) {
                            if (e == lst[0]) {
                                for (var f in data[e]) {
                                    if (parseInt(f) >= (spot - 400) && parseInt(f) <= (spot + 400)) {
                                        X.push(f)
                                        ce_data.push(parseInt(data[e][f]['CE']))
                                        pe_data.push(parseInt(data[e][f]['PE']))
                                    }
                                }
                            }

                        }
                        const series = [
                            {
                                "name": "Call",
                                "data": ce_data,
                            },
                            {
                                "name": "Put",
                                "data": pe_data
                            }
                        ]

                        setExpiryList(lst)
                        updateParameters(X, series)

                    }
                )
            }

        )

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(currentExpiry)
        var X = [], ce_data = [], pe_data = [];
        var lst = [];
        for (var e in currentData) {
            lst.push(e);
        }
        for (var e in currentData) {
            if (e == currentExpiry) {
                for (var f in currentData[e]) {
                    if (parseInt(f) >= (spot - 400) && parseInt(f) <= (spot + 400)) {
                        X.push(f)
                        ce_data.push(parseInt(currentData[e][f]['CE']))
                        pe_data.push(parseInt(currentData[e][f]['PE']))
                    }
                }
            }

        }
        const series = [
            {
                "name": "Call",
                "data": ce_data,
            },
            {
                "name": "Put",
                "data": pe_data
            }
        ]
        updateParameters(X, series)
    }



    useEffect(() => {
        fetchAllDataFromServerForCurrentInstrument();
    }, [])

    return (
        <div className="oi-charts">
            <Sidebar />
            <section className="home-section">
                <Header />
                <div className="oi-chartsCard">
                    <form action="" className="form-group form-inline" onSubmit={(e) => { handleSubmit(e) }}>
                        OI-Chart
                        <select
                            value={currentExpiry}
                            className="oi-chartsSelect"
                            onChange={(e) => {
                                setCurrentExpiry(e.target.value)
                            }}
                        >
                            {
                                expiryList.map((item, idx) => {
                                    return (
                                        <option value={item} key={idx}>
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <input type="submit" value="Check" className="btn btn-sm btn-info ml-5" />
                    </form>
                </div>
                <div className="col-md-12">
                    <Chart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                        width="95%"
                        height="600px"
                    />
                </div>
            </section>
        </div>
    )
}